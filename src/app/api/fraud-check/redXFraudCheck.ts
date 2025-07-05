import axios, { AxiosError } from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const API_BASE_URL = "https://api.redx.com.bd";
const REDX_BASE_URL = "https://redx.com.bd";

const cookieJar = new CookieJar();
const session = wrapper(
  axios.create({
    withCredentials: true,
    jar: cookieJar,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    },
  })
);

async function checkUserExists(): Promise<boolean> {
  try {
    const phoneNumber = process.env.REDX_PHONE_NUMBER;
    const response = await session.get(
      `${API_BASE_URL}/v4/redx/does-user-exist?phoneNumber=${phoneNumber}`
    );
    return response.data.exist;
  } catch (error: any) {
    throw new Error(
      `User does not exist in redX! ${
        error.response?.data?.message || error.message
      }`
    );
  }
}

async function loginWithPassword() {
  const phoneNumber = process.env.REDX_PHONE_NUMBER;
  const password = process.env.REDX_PASSWORD;
  const response = await session.post(`${API_BASE_URL}/v4/auth/login`, {
    phone: phoneNumber,
    password,
  });
  const { data } = response.data;
  const accessToken = data.accessToken;
  session.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

async function isLoggedIn(): Promise<boolean> {
  try {
    const cookies = await cookieJar.getCookies(REDX_BASE_URL);
    return cookies.some((cookie) => cookie.key === "__ti__");
  } catch (error) {
    return false;
  }
}

export async function redXFraudCheck(customerPhoneNumber: string) {
  try {
    if (!(await isLoggedIn())) {
      if (!(await checkUserExists())) {
        throw new Error("User does not exits in the redX!");
      }
      await loginWithPassword();
    }
    const response = await session.get(
      `${REDX_BASE_URL}/api/redx_se/admin/parcel/customer-success-return-rate?phoneNumber=88${customerPhoneNumber}`
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const statusCode = axiosError.response?.status || 500;
      const errorMessage =
        axiosError.response?.data ||
        axiosError.message ||
        "Unknown error occurred when checking RedX fraud status";
      if (statusCode === 429 && typeof errorMessage === "string") {
        throw new Error(
          "Too many requests in the RedX! Please try again after sometime for RedX data."
        );
      }
      throw new Error(`Failed to check RedX fraud status. ${errorMessage}`);
    }
    throw new Error(`${error.message} Failed to check redX fraud status.`);
  }
}
