import axios from "axios";
import { getCookie } from "./utils/cookies";

const baseURL = "https://sbr-db.herokuapp.com";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(function (config) {
  const token = getCookie("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;

export const storageURL = `https://www.filestackapi.com/api/store/S3?key=${process.env.REACT_APP_FILESTACK_API_KEY}`;
