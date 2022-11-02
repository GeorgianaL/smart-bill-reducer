import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";
import { getBuildings } from "./buildings";

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
  async (args, { getState }) => {
    try {
      const state = getState();
      const {
        buildings: { activeBuilding },
      } = state;

      let buildingsList = activeBuilding;

      const activeBuildingsIds = buildingsList.map((building) => building.id);
      const buildingsListIds = activeBuildingsIds.join(",");

      const res = await axios.get(`/schedules/buildings/${buildingsListIds}`);

      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  "schedules/deleteSchedule",
  async (scheduleId) => {
    try {
      const res = await axios.delete(`/schedules/${scheduleId}`);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const saveSchedule = createAsyncThunk(
  "schedules/saveSchedule",
  async (payload) => {
    const data = {
      ...payload,
      floorIds: payload.floors,
      zoneIds: payload.zones,
    };
    const { id } = payload;

    if (id !== null) {
      const res = await axios.put(`/schedules/${id}`, data);
      return res.data;
    } else {
      const res = await axios.post(`/schedules`, data);
      return res.data;
    }
  }
);
