import { createSlice } from "@reduxjs/toolkit";
import { getSchedules } from "../actions";

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: {
    schedules: [],
    loading: true,
    error: null,
  },
  reducers: {
    updateSchedule: (state, action) => {
      console.log(action);
      const {
        payload: { scheduleType, scheduleDay, field, value },
      } = action;
      // console.log(scheduleType, field, value);
      state.schedules[scheduleType][scheduleDay] = {
        ...state.schedules[scheduleType][scheduleDay],
        [field]: value,
      };
    },
  },
  extraReducers: {
    [getSchedules.pending]: (state) => {
      state.loading = true;
    },
    [getSchedules.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    },
    [getSchedules.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = schedulesSlice;

export const { updateSchedule } = actions;

export default reducer;
