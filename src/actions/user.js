import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { setCookie } from "../utils/cookies";

export const login = createAsyncThunk("user", async (payload) => {
  try {
    const res = await axios.post("users/auth/login", payload);
    setCookie(res.data.token);
    return res.data;
  } catch (error) {
    console.error(`Could not login: ${error}`);
  }
});
