import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Grid, TextField } from "@mui/material";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { getMovies } from "../store/moviesSlice";
import type { Movie } from "../types/types";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filteredMovies = movies.filter((m: Movie) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(getMovies(1));
  }, [dispatch]);

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 2 }}
      />
      {status === "loading" ? (
        <Grid container spacing={2}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Grid item key={i}>
              <Skeleton variant="rectangular" width={200} height={300} />
              <Skeleton width={200} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {filteredMovies.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </>
  );
};

export default MovieList;