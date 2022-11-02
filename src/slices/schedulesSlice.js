import { createSlice } from "@reduxjs/toolkit";
import { getSchedules, saveSchedule, getBuildings } from "../actions";

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
    loading: true,
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
            if (schedule.id === id) {
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
  },
});

const { actions, reducer } = schedulesSlice;

export const {
  onCreateEmptySchedule,
  onChangeSchedule,
  onChangeScheduleDetails,
} = actions;

export default reducer;
