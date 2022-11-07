import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { setCookie } from "../utils/cookies";

export const login = createAsyncThunk("user", async (payload) => {
  try {
    const res = await axios.post("users/auth/login", payload);
    setCookie("token", res.data.token);
    return res.data;
  } catch (error) {
    console.error(`Could not login: ${error}`);
  }
});

export const signup = createAsyncThunk("signup", async (payload) => {
  try {
    const res = await axios.post("users/auth/signup", payload);
    return res.data;
  } catch (error) {
    console.error(`Could not signup: ${error}`);
  }
});
