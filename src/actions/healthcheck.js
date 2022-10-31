import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

const defaultHealthcheck = {
  active: 0,
  unresponsive: 0,
  details: [],
};

export const getHealthcheck = createAsyncThunk(
  "healthcheck/getHealthcheck",
  async (args, { getState }) => {
    try {
      const state = getState();
      const {
        buildings: { activeBuilding },
      } = state;
      const activeBuildingsIds = activeBuilding.map((building) => building.id);
      let data = defaultHealthcheck;

      for await (const buildingId of activeBuildingsIds) {
        const res = await axios.get(`/healthcheck/buildings/${buildingId}`);
        data = {
          ...data,
          active: data.active + res.data.active,
          unresponsive: data.unresponsive + res.data.unresponsive,
          details: [...data.details, ...res.data.details],
        };
      }

      return data;
    } catch (err) {
      return err.response.data;
    }
  }
);
