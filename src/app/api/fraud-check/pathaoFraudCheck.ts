import axios, { AxiosError } from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const API_BASE_URL = "https://merchant.pathao.com";

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
  const username = process.env.PATHAO_USERNAME;
  const password = process.env.PATHAO_PASSWORD;
  const response = await session.post("/api/v1/login", { username, password });
  const accessToken = response.data.access_token;
  session.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const pathaoFraudCheck = async (phone: string) => {
  try {
    if (!(await isLoggedIn())) {
      await login();
    }
    const response = await session.post("/api/v1/user/success", { phone });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const statusCode = axiosError.response?.status || 500;
      const errorMessage =
        axiosError.response?.data ||
        axiosError.message ||
        "Unknown error occurred while checking Pathao fraud status.";
      if (statusCode === 429 && typeof errorMessage === "string") {
        throw new Error(
          "Too many requests in the Pathao! Please try again after sometime for Pathao data."
        );
      }
      throw new Error(`Failed to check Pathao fraud status. ${errorMessage}`);
    }
    throw new Error(`${error.message} Failed to check Pathao fraud status.`);
  }
};
