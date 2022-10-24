import axios from "axios";
import { getCookie } from "./utils/cookies";

// const baseURL = "http://localhost:3000/";
const baseURL = "https://sbr-db.herokuapp.com";

const instance = axios.create({
  baseURL,
});

const token = getCookie("token");
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default instance;

export const storageURL = `https://www.filestackapi.com/api/store/S3?key=${process.env.REACT_APP_FILESTACK_API_KEY}`;
