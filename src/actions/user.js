import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { setCookie } from "../utils/cookies";

export const login = createAsyncThunk("user/login", async (payload) => {
  try {
    const res = await axios.get("/user");
    setCookie(res.data.token);
    return res.data;
  } catch (error) {
    console.error(`Could not login: ${error}`);
  }
});
