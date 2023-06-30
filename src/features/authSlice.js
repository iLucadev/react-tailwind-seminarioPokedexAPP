import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuth: false,
    user: null,
    isLoading: true,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    changeAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addToken, changeAuth, addUser, changeIsLoading } = slice.actions;

export default slice.reducer;
