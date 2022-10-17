import { createSlice } from "@reduxjs/toolkit";
import { getEntities, switchPower } from "../actions";

const entitiesSlice = createSlice({
  name: "entities",
  initialState: {
    zones: [],
    sensors: [],
    relays: [],
    loading: false,
    error: null,
    activeEntity: null,
    loadingPowerChange: false,
    powerChangeErr: null,
  },
  reducers: {
    setActiveEntity: (state, action) => {
      return {
        ...state,
        activeEntity: action.payload,
      };
    },
    addEntity: (state, action) => {
      const {
        payload: { entityList, newEntity },
      } = action;
      state[entityList].push(newEntity);
    },
    deleteEntity: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getEntities.pending]: (state) => {
      state.loading = true;
    },
    [getEntities.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    },
    [getEntities.rejected]: (state) => {
      state.loading = false;
    },
    [switchPower.pending]: (state) => {
      state.loadingPowerChange = true;
    },
    [switchPower.fulfilled]: (state) => {
      return {
        ...state,
        loadingPowerChange: false,
        powerChangeErr: null,
        relays: state.relays.map((relay) => {
          if (relay.id === state.activeEntity) {
            return {
              ...relay,
              powerOn: !relay.powerOn,
            };
          }
          return relay;
        }),
        // activeEntity: null,
      };
    },
    [getEntities.rejected]: (state) => {
      return {
        ...state,
        powerChangeErr: true,
        loadingPowerChange: false,
        // activeEntity: null,
      };
    },
  },
});

const { actions, reducer } = entitiesSlice;

export const { setActiveEntity, addEntity, deleteEntity } = actions;

export default reducer;
