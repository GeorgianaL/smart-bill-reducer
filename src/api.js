import axios from "axios";
import { getCookie } from "./utils/cookies";

const baseURL = "http://localhost:3000/";

const instance = axios.create({
  baseURL,
});

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [baseURL];
    const token = getCookie("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
