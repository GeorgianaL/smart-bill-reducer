import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { schedules } from "../mock/schedules";

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
  async () => {
    try {
      return schedules;
    } catch (error) {
      return error.response.data;
    }
  }
);
