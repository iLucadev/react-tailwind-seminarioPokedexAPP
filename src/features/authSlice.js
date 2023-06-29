import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuth: false,
    user: {
      username: null,
      pokedex: [],
      poketeam: [],
    },
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
  },
});

export const { addToken, changeAuth, addUser } = slice.actions;

export default slice.reducer;
