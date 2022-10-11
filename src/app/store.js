import { configureStore } from "@reduxjs/toolkit";
import { user, buildings, entities, schedules } from "../slices";

const store = configureStore({
  reducer: {
    user,
    buildings,
    entities,
    schedules,
  },
});

export default store;
