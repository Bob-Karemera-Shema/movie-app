import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Movie } from "./MovieList";
import MovieCard from "../components/MovieCard";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  return movie ? (
    <div>
      <MovieCard movie={movie} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetail;