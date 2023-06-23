import { createSlice } from "@reduxjs/toolkit";
import { Films } from "../shared/ListOfFilms";
export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    films: { value: Films },
  },
  reducers: {
    addFilm: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFilm: (state, action) => {
      state.value = state.value.filter(
        (films) => films.id !== action.payload.id
      );
    },
  },
});

export const { addFilm, deleteFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
