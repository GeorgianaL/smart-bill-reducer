import { createSlice } from "@reduxjs/toolkit";
import { getHealthcheck } from "../actions";

const initialState = {
  loading: false,
  error: null,
  healthcheck: null,
};

export const healthcheckSlice = createSlice({
  name: "healthcheck",
  initialState,
  reducers: {},
  extraReducers: {
    [getHealthcheck.pending]: (state) => {
      state.loading = true;
    },
    [getHealthcheck.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getHealthcheck.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer } = healthcheckSlice;

export default reducer;
