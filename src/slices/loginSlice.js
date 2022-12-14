import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../actions";
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
      if (payload && payload.success) {
        return {
          ...state,
          loading: false,
          isLoggedIn: true,
          data: payload,
        };
      }
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: true,
      };
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    [signup.rejected]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
});

const { reducer } = loginSlice;

export default reducer;
