import { createSlice } from "@reduxjs/toolkit";
import { getSchedules, getEntities } from "../actions";

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: {
    loading: true,
    error: null,
    schedules: {},
    filters: [],
  },
  reducers: {
    updateFilters: (state, action) => {
      return {
        ...state,
        filters: action.payload,
      };
    },
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
    [getEntities.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        filters: payload.zones,
      };
    },
    [getSchedules.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        schedules: {
          ...payload,
        },
      };
    },
    [getSchedules.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = schedulesSlice;

export const { updateFilters, updateSchedule } = actions;

export default reducer;
