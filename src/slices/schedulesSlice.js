import { createSlice } from "@reduxjs/toolkit";
import { getSchedules } from "../actions";

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: {
    loading: true,
    error: null,
    schedules: [],
  },
  reducers: {},
  extraReducers: {
    [getSchedules.pending]: (state) => {
      state.loading = true;
    },
    [getSchedules.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        schedules: payload,
      };
    },
    [getSchedules.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = schedulesSlice;

export default reducer;
