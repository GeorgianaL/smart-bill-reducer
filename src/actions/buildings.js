import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getBuildings = createAsyncThunk(
  "buildings/getBuildings",
  async () => {
    const res = await axios.get("/buildings");
    return res.data;
  }
);

export const saveBuilding = createAsyncThunk(
  "buildings/editBuilding",
  async (payload) => {
    const { id, name } = payload;

    if (id !== null) {
      const res = await axios.patch(`/buildings/${id}`, { name });
      return res.data;
    } else {
      const res = await axios.post(`/buildings`, { name });
      return res.data;
    }
  }
);

export const deleteBuilding = createAsyncThunk(
  "buildings/deleteBuilding",
  async (buildingId) => {
    const res = await axios.delete(`/buildings/${buildingId}`);
    return res.data;
  }
);
