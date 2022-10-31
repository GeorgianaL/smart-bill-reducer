import { createSlice } from "@reduxjs/toolkit";
import { getSchedules } from "../actions";

const defaultSchedule = {
  name: "",
  floorId: null,
  zoneIds: [],
  details: [
    {
      day: [],
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
    schedules: [
      {
        id: "12131qweqr",
        name: "Beginning of week",
        floors: ["Floor 2"],
        zones: ["Zone 1", "Zone 2", "Zone 3"],
        details: [
          {
            day: "Monday",
            hours: [
              { startHour: "08:00", endHour: "18:30" },
              { startHour: "19:00", endHour: "20:00" },
            ],
          },
          {
            day: "Tuesday",
            hours: [
              { startHour: "07:00", endHour: "09:00" },
              { startHour: "10:00", endHour: "17:00" },
            ],
          },
        ],
      },
      {
        id: "578331qasdr",
        name: "Fridays",
        floors: ["Floor 4", "Floor 5"],
        zones: ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"],
        details: [
          {
            day: "Friday",
            hours: [{ startHour: "09:00", endHour: "17:30" }],
          },
        ],
      },
    ],
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
