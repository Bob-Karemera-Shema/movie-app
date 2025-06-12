import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../api/tmdb";

export const getMovies = createAsyncThunk("movies/fetch", fetchPopularMovies);

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.status = "succeeded";
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;