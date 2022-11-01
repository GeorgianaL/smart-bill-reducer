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
        building: "3494597428772864",
        floors: ["3495137751597056", "3495331043999744"],
        zones: ["3496410708180992", "3496410775289856", "3496410834010112"],
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
        building: "3495461690277888",
        floors: ["3495461704957952", "3495461721735168"],
        zones: ["3495499139121152", "3495500189794304"],
        details: [
          {
            day: "Friday",
            hours: [{ startHour: "09:00", endHour: "17:30" }],
          },
        ],
      },
    ],
  },
  reducers: {
    setActiveSchedule: (state, action) => {
      return {
        ...state,
        schedules: state.schedules.map((schedule) => {
          if (schedule.id === action.payload) {
            return {
              ...schedule,
              onEdit: true,
            };
          }
          return schedule;
        }),
      };
    },
    onChangeSchedule: (state, { payload }) => {
      const { id, field, value } = payload;
      return {
        ...state,
        schedules: state.schedules.map((schedule) => {
          if (schedule.onEdit || schedule.id === id) {
            return {
              ...schedule,
              [field]: value,
            };
          }
          return schedule;
        }),
      };
    },
    onChangeScheduleDetails: (state, { payload }) => {
      const { id, field, value, scheduleIndex } = payload;
      return {
        ...state,
        schedules: state.schedules.map((schedule) => {
          if (schedule.onEdit || schedule.id === id) {
            return {
              ...schedule,
              details: schedule.details.map((detail, index) => {
                if (index === scheduleIndex) {
                  return {
                    ...detail,
                    [field]: value,
                  };
                }
                return detail;
              }),
            };
          }
          return schedule;
        }),
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
  },
});

const { actions, reducer } = schedulesSlice;

export const { setActiveSchedule, onChangeSchedule, onChangeScheduleDetails } =
  actions;

export default reducer;
