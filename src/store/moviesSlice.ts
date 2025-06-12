import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../api/tmdb";
import type { Movie } from "../types/types";

interface MovieState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MovieState = {
  movies: [],
  status: 'idle'
}

export const getMovies = createAsyncThunk<Movie[], number, { rejectValue: string }>("movies/fetch", fetchPopularMovies);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;