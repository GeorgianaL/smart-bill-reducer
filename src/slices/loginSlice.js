import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions";
import { hasCookie } from "../utils/cookies";

const isLoggedIn = hasCookie("token");

const initialState = {
  loading: false,
  error: null,
  isLoggedIn,
  data: {},
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.data = payload;
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
});

const { reducer } = loginSlice;

export default reducer;
