import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getFloors = createAsyncThunk("floors/getFloors", async () => {
  const res = await axios.get("/floors");
  return res.data;
});

export const saveFloorName = createAsyncThunk(
  "floors/editBuilding",
  async (payload) => {
    const res = await axios.put("/floors", payload);
    return res.data;
  }
);

export const deleteFloor = createAsyncThunk(
  "floors/deleteFloor",
  async (floorId) => {
    const res = await axios.delete(`/floors/${floorId}`);
    return res.data;
  }
);
