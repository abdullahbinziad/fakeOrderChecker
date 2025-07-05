import axios, { AxiosError } from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const API_BASE_URL = "https://go-app.paperfly.com.bd";

const cookieJar = new CookieJar();
const session = wrapper(
  axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    jar: cookieJar,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    },
  })
);

async function isLoggedIn(): Promise<boolean> {
  try {
    const auth = session.defaults.headers.common["Authorization"];
    return !!auth;
  } catch (error) {
    return false;
  }
}

async function login() {
  const username = process.env.PAPERFLY_USERNAME;
  const password = process.env.PAPERFLY_PASSWORD;
  const response = await session.post(
    "/merchant/api/react/authentication/login_using_password.php",
    {
      username,
      password,
    }
  );
  const accessToken = response.data.token;
  session.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const paperFlyFraudCheck = async (phone: string): Promise<any> => {
  try {
    if (!(await isLoggedIn())) {
      await login();
    }
    const response = await session.post(
      "/merchant/api/react/smart-check/list.php?",
      {
        search_text: phone,
        limit: 50,
        page: 1,
      }
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const statusCode = axiosError.response?.status || 500;
      const errorMessage =
        axiosError.response?.data ||
        axiosError.message ||
        "Unknown error occurred while checking Paperfly fraud status.";
      if (
        statusCode === 500 &&
        axiosError.response?.headers["x-cache"] === "Error from cloudfront" &&
        axiosError.response?.headers["content-type"] ===
          "text/html; charset=UTF-8" &&
        axiosError.response?.headers["content-length"] === "0"
      ) {
        await login();
        return paperFlyFraudCheck(phone);
      }
      if (statusCode === 429 && typeof errorMessage === "string") {
        throw new Error(
          "Too many requests in the paperFly! Please try again after sometime for PaperFly data."
        );
      }
      throw new Error(`Failed to check paperFly fraud status. ${errorMessage}`);
    }
    throw new Error(`${error.message} Failed to check paperFly fraud status.`);
  }
};
