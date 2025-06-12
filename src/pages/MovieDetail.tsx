import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetail;