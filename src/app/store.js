import { configureStore } from "@reduxjs/toolkit";
import { buildings, entities } from "../slices";

const store = configureStore({
  reducer: {
    buildings,
    entities,
  },
});

export default store;
