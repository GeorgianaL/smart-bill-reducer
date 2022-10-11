import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { schedules } from "../mock/schedules";

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
  async () => {
    try {
      // const entites = await Promise.all(
      //   [
      //     axios.get("https://jsonplaceholder.typicode.com/posts"),
      //     axios.get("https://jsonplaceholder.typicode.com/posts"),
      //     axios.get("https://jsonplaceholder.typicode.com/posts"),
      //   ].map((promise) => promise.catch((error) => error))
      // );
      return {
        schedules,
      };
    } catch (error) {
      console.error(error);
    }
  }
);
