import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Grid, TextField } from "@mui/material";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const filteredMovies = movies.filter((m: any) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

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
      <Grid container spacing={2}>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MovieList;