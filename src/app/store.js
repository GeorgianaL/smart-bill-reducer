import { configureStore } from "@reduxjs/toolkit";
import { user, buildings, entities, schedules, healthcheck } from "../slices";

const store = configureStore({
  reducer: {
    user,
    buildings,
    entities,
    schedules,
    healthcheck,
  },
});

export default store;
