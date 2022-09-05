import { createSlice } from "@reduxjs/toolkit";
import { getBuildings, getFloors } from "./actions";

const initialState = {
  buildings: [],
  floors: [],
  loading: false,
  error: null,
};

export const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {},
  extraReducers: {
    [getBuildings.pending]: (state) => {
      state.loading = true;
    },
    [getBuildings.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.buildings = payload;
    },
    [getBuildings.rejected]: (state) => {
      state.loading = false;
    },
    [getFloors.pending]: (state) => {
      state.loading = true;
    },
    [getFloors.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.floors = payload;
    },
    [getFloors.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer } = buildingsSlice;

export default reducer;
