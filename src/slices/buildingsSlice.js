import { createSlice } from "@reduxjs/toolkit";
import { getBuildings, saveBuilding, getFloors, addPicture } from "../actions";

const initialState = {
  activeBuilding: [],
  activeFloor: null,
  buildings: [],
  floors: [],
  loading: false,
  error: null,
};

export const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    changeActiveBuilding: (state, action) => {
      let newActiveBuildings = action.payload;
      if (newActiveBuildings.length !== 0) {
        return {
          ...state,
          activeBuilding: newActiveBuildings,
          activeFloor:
            newActiveBuildings[0].floorIds.length > 0
              ? newActiveBuildings[0].floorIds[0]
              : null,
        };
      }
    },
    editFloor: (state, action) => {
      const {
        payload: { id, field, value },
      } = action;

      return {
        ...state,
        floors: state.floors.map((floor) => {
          if (floor.id === id) {
            return {
              ...floor,
              [field]: value,
            };
          }
          return floor;
        }),
      };
    },
    addNewFloor: (state, action) => {
      return {
        ...state,
        buildings: state.buildings.map((building) => {
          if (building.id === action.payload) {
            return {
              ...building,
              floorIds: [...building.floorIds, null],
            };
          }
          return building;
        }),
        floors: [
          ...state.floors,
          {
            id: null,
            buildingId: action.payload,
            name: "",
          },
        ],
      };
    },
    editBuildingName: (state, action) => {
      const {
        payload: { id, value },
      } = action;

      return {
        ...state,
        buildings: state.buildings.map((building) => {
          if (building.id === id) {
            return {
              ...building,
              name: value,
            };
          }
          return building;
        }),
      };
    },
    addNewBuilding: (state) => {
      return {
        ...state,
        buildings: [
          ...state.buildings,
          {
            id: null,
            name: "",
            floorIds: [],
          },
        ],
      };
    },
    discardEmptyFloor: (state, action) => {
      return {
        ...state,
        buildings: state.buildings.map((building) => {
          if (building.id === action.payload) {
            return {
              ...building,
              floorIds: building.floorIds.filter((floorId) => floorId !== null),
            };
          }
          return building;
        }),
        floors: state.floors.filter((floor) => floor.id !== null),
      };
    },
    discardEmptyBuilding: (state) => {
      return {
        ...state,
        buildings: state.buildings.filter((building) => building.id !== null),
      };
    },
    changeActiveFloor: (state, action) => {
      return {
        ...state,
        activeFloor: action.payload,
      };
    },
  },
  extraReducers: {
    [getBuildings.pending]: (state) => {
      state.loading = true;
    },
    [saveBuilding.pending]: (state) => {
      state.loading = true;
    },
    [getBuildings.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        buildings: payload,
        activeBuilding: payload,
      };
    },
    [saveBuilding.fulfilled]: (state) => {
      state.loading = false;
    },
    [saveBuilding.rejected]: (state) => {
      state.loading = false;
    },
    [getBuildings.rejected]: (state) => {
      state.loading = false;
    },
    [getFloors.pending]: (state) => {
      state.loading = true;
    },
    [getFloors.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        floors: payload,
        activeFloor: payload[0].id,
      };
    },
    [getFloors.rejected]: (state) => {
      state.loading = false;
    },
    [addPicture.pending]: (state) => {
      state.loading = true;
    },
    [addPicture.fulfilled]: (state) => {
      state.loading = false;
    },
    [addPicture.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = buildingsSlice;

export const {
  changeActiveBuilding,
  editFloor,
  addNewFloor,
  editBuildingName,
  addNewBuilding,
  discardEmptyFloor,
  discardEmptyBuilding,
  changeActiveFloor,
} = actions;

export default reducer;
