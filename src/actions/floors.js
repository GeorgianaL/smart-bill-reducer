import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getFloors = createAsyncThunk("floors/getFloors", async () => {
  const res = await axios.get("/floors");
  return res.data;
});

export const saveFloor = createAsyncThunk(
  "floors/editBuilding",
  async (payload) => {
    const { id, buildingId, name, ...props } = payload;

    if (id !== null) {
      const res = await axios.patch(`/floors/${id}`, { props });
      return res.data;
    } else {
      const res = await axios.post(`/floors`, { buildingId, name });
      return res.data;
    }
  }
);

export const deleteFloor = createAsyncThunk(
  "floors/deleteFloor",
  async (floorId) => {
    const res = await axios.delete(`/floors/${floorId}`);
    return res.data;
  }
);
