import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/moviesSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state: any) => state.movies);

  useEffect(() => {
    dispatch(getMovies() as any);
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to fetch movies.</p>}
      {movies.map((movie: any) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default MovieList;