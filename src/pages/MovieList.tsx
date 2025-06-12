import { useState } from "react";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const filteredMovies = movies.filter((m: any) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div></>
  );
};

export default MovieList;