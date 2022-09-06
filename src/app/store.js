import { configureStore } from "@reduxjs/toolkit";
import { buildings, entities, schedules } from "../slices";

const store = configureStore({
  reducer: {
    buildings,
    entities,
    schedules,
  },
});

export default store;
