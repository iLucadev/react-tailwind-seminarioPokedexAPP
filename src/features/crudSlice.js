import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "crud",
  initialState: {
    pokemons: [],
    isLoading: true,
  },
  reducers: {
    addPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    changeLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addPokemons, changeLoading } = slice.actions;

export default slice.reducer;
