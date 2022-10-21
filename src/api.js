import axios from "axios";
import { getCookie } from "./utils/cookies";

// const baseURL = "http://localhost:3000/";
const baseURL = "https://sbr-db.herokuapp.com";

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

export const storageURL = `https://www.filestackapi.com/api/store/S3?key=${process.env.REACT_APP_FILESTACK_API_KEY}`;
