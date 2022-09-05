import { createSlice } from "@reduxjs/toolkit";
import { getEntities } from "./actions";

const entitiesSlice = createSlice({
  name: "entities",
  initialState: {
    zones: [],
    sensors: [],
    relays: [],
    loading: false,
    error: null,
  },
  reducers: {
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
  },
});

const { actions, reducer } = entitiesSlice;

export const { addEntity, deleteEntity } = actions;

export default reducer;
