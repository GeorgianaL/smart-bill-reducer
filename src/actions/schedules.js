import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
// import { schedules } from "../mock/schedules";

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
  async () => {
    try {
      // will need to add selected zoneIds (filters)
      // to add /standard
      const res = await axios.get(`/schedules`);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const saveStandardSchedule = createAsyncThunk(
  "schedules/saveSchedule",
  async (payload) => {
    try {
      const { field, scheduleDay, value } = payload;

      // will need to add  zoneIds
      await axios.patch(`/schedules/standard`, {
        [scheduleDay]: {
          [field]: value,
        },
      });
    } catch (error) {
      return error.response.data;
    }
  }
);
