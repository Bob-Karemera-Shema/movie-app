import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Grid, TextField } from "@mui/material";
import { Skeleton } from "@mui/material";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filteredMovies = movies.filter((m: any) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(getMovies(page) as any);
  }, [dispatch, page]);

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
      <Button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>Previous</Button>
      <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
    </>
  );
};

export default MovieList;