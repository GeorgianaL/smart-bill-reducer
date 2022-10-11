import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getBuildings = createAsyncThunk(
  "buildings/getBuildings",
  async () => {
    const res = await axios.get("/buildings");
    return res.data;
  }
);

export const addBuilding = createAsyncThunk(
  "buildings/addBuilding",
  async (payload) => {
    const res = await axios.post("/buildings", payload);
    return res.data;
  }
);

export const saveBuilding = createAsyncThunk(
  "buildings/editBuilding",
  async (payload) => {
    const res = await axios.put("/buildings", payload);
    return res.data;
  }
);

export const deleteBuilding = createAsyncThunk(
  "buildings/deleteBuilding",
  async (buildingId) => {
    const res = await axios.delete(`/buildings/${buildingId}`);
    return res.data;
  }
);
