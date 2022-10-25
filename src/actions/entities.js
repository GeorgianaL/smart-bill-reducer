import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

import { ZONE, SENSOR, RELAY } from "../utils/config";

export const getEntities = createAsyncThunk(
  "entities/getEntities",
  async (args, { getState }) => {
    const state = getState();
    const {
      buildings: { activeFloor },
    } = state;

    const res = await axios.get(`/entities/floors/${activeFloor}`);
    const {
      data: { zones, sensors, relays },
    } = res;
    return {
      zones: zones.map((zone) => ({ ...zone, controlType: ZONE })),
      sensors: sensors.map((sensor) => ({
        ...sensor,
        controlType: SENSOR,
      })),
      relays: relays.map((relay) => ({
        ...relay,
        controlType: RELAY,
      })),
    };
  }
);

export const addZone = createAsyncThunk(
  "entities/addZone",
  async (payload, { getState }) => {
    const state = getState();
    const {
      buildings: { activeFloor },
    } = state;

    const res = await axios.post(
      `/entities/floors/${activeFloor}/zones`,
      payload
    );
    return res.data;
  }
);

export const addSensor = createAsyncThunk(
  "entities/addSensor",
  async (payload, { getState }) => {
    const state = getState();
    const {
      buildings: { activeFloor },
    } = state;
    debugger;
    // const res = await axios.put(`/entities/floors/${activeFloor}/sensor`, payload);
    // return res.data;
  }
);

export const addRelay = createAsyncThunk(
  "entities/addRelay",
  async (payload, { getState }) => {
    const state = getState();
    const {
      buildings: { activeFloor },
    } = state;

    const res = await axios.put(
      `/entities/floors/${activeFloor}/relays`,
      payload
    );
    return res.data;
  }
);

export const switchPower = createAsyncThunk(
  "entities/switchPower",
  async (payload, { getState }) => {
    const state = getState();
    const {
      entities: { activeEntity },
    } = state;

    try {
      const res = await axios.patch(`/entities/${activeEntity}`, {
        powerOn: payload,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
);
