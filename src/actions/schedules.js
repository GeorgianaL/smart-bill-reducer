import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
  async (args, { getState }) => {
    try {
      const state = getState();
      const {
        buildings: { activeBuilding },
      } = state;

      let activeBuildingsIds = activeBuilding
        .map((building) => building.id)
        .join(",");

      if (activeBuilding.length === 0) {
        const buildings = await axios.get(`/buildings`);
        activeBuildingsIds = buildings.map((building) => building.id);
      }
      const res = await axios.get(`/schedules/buildings/${activeBuildingsIds}`);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getSchedulById = createAsyncThunk(
  "schedules/getSchedule",
  async (scheduleId) => {
    try {
      const res = await axios.get(`/schedules/${scheduleId}`);
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
