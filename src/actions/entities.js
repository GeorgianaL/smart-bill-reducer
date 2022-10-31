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
      zones: zones.map((zone) => ({
        ...zone,
        controlType: ZONE,
        x: Number(zone.x),
        y: Number(zone.y),
        width: Number(zone.width),
        height: Number(zone.height),
      })),
      sensors: sensors.map((sensor) => ({
        ...sensor,
        controlType: SENSOR,
        x: Number(sensor.x),
        y: Number(sensor.y),
      })),
      relays: relays.map((relay) => ({
        ...relay,
        controlType: RELAY,
        x: Number(relay.x),
        y: Number(relay.y),
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
    const { id, zoneId } = payload;

    const res = await axios.post(
      `/entities/floors/${activeFloor}/zones/${zoneId}/sensors`,
      {
        ...payload,
        id: Number(id),
      }
    );
    return res.data;
  }
);

export const addRelay = createAsyncThunk(
  "entities/addRelay",
  async (payload, { getState }) => {
    const state = getState();
    const {
      buildings: { activeFloor },
    } = state;

    const res = await axios.post(`/entities/floors/${activeFloor}/relays`, {
      ...payload,
      id: Number(payload.id),
      zoneIds: payload.zoneId.map((zone) => zone.id),
    });
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

export const getAllZones = createAsyncThunk("entities/zones", async () => {
  try {
    const res = await axios.get(`/entities/zones`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
});
