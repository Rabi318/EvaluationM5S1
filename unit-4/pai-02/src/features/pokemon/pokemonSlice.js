import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  sort: "asc",
  page: 1,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setFilter, setSort, setPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;
