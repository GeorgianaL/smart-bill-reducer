import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from "../api";

import { zones, sensors, relays } from "../mock/entities";
import { ZONE, SENSOR, RELAY } from "../utils/config";

export const getEntities = createAsyncThunk(
  "entities/getEntities",
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
    } catch (error) {
      console.error(error);
    }
  }
);
