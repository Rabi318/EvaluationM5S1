import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "../features/pokemon/pokemonSlice";
import { pokemonApi } from "../features/pokemon/pokemonReducer";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
