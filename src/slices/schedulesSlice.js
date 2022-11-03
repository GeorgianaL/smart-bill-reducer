import { createSlice } from "@reduxjs/toolkit";
import {
  getSchedules,
  getSchedulById,
  saveSchedule,
  getBuildings,
  deleteSchedule,
} from "../actions";

export const defaultSchedule = {
  name: "",
  buildingId: null,
  floors: [],
  zones: [],
  details: [
    {
      day: "Monday",
      hours: [
        {
          startHour: "07:00",
          endHour: "18:00",
        },
      ],
    },
  ],
};

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: {
    loading: false,
    error: null,
    schedules: [],
    defaultSchedule,
  },
  reducers: {
    onChangeSchedule: (state, { payload }) => {
      const { id, field, value } = payload;

      if (id) {
        return {
          ...state,
          schedules: state.schedules.map((schedule) => {
            if (String(schedule.id) === String(id)) {
              return {
                ...schedule,
                [field]: value,
              };
            }
            return schedule;
          }),
        };
      }
      return {
        ...state,
        defaultSchedule: {
          ...state.defaultSchedule,
          [field]: value,
        },
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
        schedules: payload,
      };
    },
    [getSchedules.rejected]: (state) => {
      state.loading = false;
    },
    [getBuildings.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        defaultSchedule: {
          ...state.defaultSchedule,
          buildingId: payload[0].id,
        },
      };
    },
    [saveSchedule.fulfilled]: (state) => {
      return {
        ...state,
        defaultSchedule,
      };
    },
    [getSchedulById.pending]: (state) => {
      state.loading = true;
    },
    [getSchedulById.fulfilled]: (state, { payload }) => {
      const scheduleExists = state.schedules.find(
        (schedule) => String(schedule.id) === String(payload.id)
      );

      return {
        ...state,
        loading: false,
        schedules: scheduleExists
          ? state.schedules
          : [...state.schedules, payload],
      };
    },
    [getSchedulById.rejected]: (state) => {
      state.loading = false;
    },
    [deleteSchedule.pending]: (state) => {
      state.loading = true;
    },
    [deleteSchedule.fulfilled]: (state, payload) => {
      const id = payload.meta.arg;
      return {
        ...state,
        loading: false,
        schedules: state.schedules.filter(
          (schedule) => String(schedule.id) !== String(id)
        ),
      };
    },
    [deleteSchedule.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = schedulesSlice;

export const {
  onCreateEmptySchedule,
  onChangeSchedule,
  onChangeScheduleDetails,
} = actions;

export default reducer;
