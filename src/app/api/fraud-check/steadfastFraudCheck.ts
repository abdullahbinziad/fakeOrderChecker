import axios, { AxiosError } from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";
import * as cheerio from "cheerio";

const API_BASE_URL = "https://steadfast.com.bd";

const cookieJar = new CookieJar();
const session = wrapper(
  axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    },
    jar: cookieJar,
  })
);

async function isLoggedIn() {
  try {
    const cookies = await cookieJar.getCookies(API_BASE_URL);
    return cookies.some((cookie) => cookie.key === "XSRF-TOKEN");
  } catch (error) {
    return false;
  }
}

async function login() {
  const email = process.env.STEADFAST_EMAIL;
  const password = process.env.STEADFAST_PASSWORD;
  const response = await session.get("/login");
  const html = response.data;
  const $ = cheerio.load(html);
  const csrfToken = $('input[name="_token"]').val();
  if (!csrfToken) throw new Error("Steadfast CSRF token not found");
  const loginData = { _token: csrfToken, email, password };
  await session.post("/login", loginData);
}

export async function steadfastFraudCheck(phoneNumber: string) {
  try {
    if (!(await isLoggedIn())) {
      await login();
    }
    const response = await session.get(`/user/frauds/check/${phoneNumber}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const statusCode = axiosError.response?.status || 500;
      const errorMessage =
        axiosError.response?.data ||
        axiosError.message ||
        "Unknown error occurred when checking steadfast fraud status";
      if (statusCode === 429 && typeof errorMessage === "string") {
        throw new Error(
          "Too many requests in the steadfast! Please try again after sometime for Steadfast data."
        );
      }
      throw new Error(
        `Failed to check steadfast fraud status. ${errorMessage}`
      );
    }
    throw new Error(`${error.message} Failed to check steadfast fraud status.`);
  }
}
