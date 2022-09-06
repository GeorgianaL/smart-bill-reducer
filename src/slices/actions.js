import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { buildings, floors } from "../mock/buildings";
import { zones, sensors, relays } from "../mock/entities";
import { ZONE, SENSOR, RELAY } from "../utils/config";
import { schedules } from "../mock/schedules";

export const getBuildings = createAsyncThunk(
  //action type string
  "buildings/getBuildings",
  // callback function
  async () => {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // return res.data;
    return buildings;
  }
);

export const getFloors = createAsyncThunk(
  //action type string
  "buildings/getFloors",
  // callback function
  async () => {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // return res.data;
    return floors;
  }
);

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

export const getSchedules = createAsyncThunk(
  "schedules/getSchedules",
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
        schedules,
      };
    } catch (error) {
      console.error(error);
    }
  }
);
