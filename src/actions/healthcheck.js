import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getHealthcheck = createAsyncThunk(
  "healthcheck/getHealthcheck",
  async () => {
    try {
      const res = await axios.get(`/healthcheck`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
);
