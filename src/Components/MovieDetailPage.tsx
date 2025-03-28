import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";

const API_KEY = "6f04991e";
const API_URL = "https://www.omdbapi.com/";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Actors: string;
  Plot: string;
}

interface MovieDetailPageProps {
  imdbID: string;
}

const MovieDetailPage = ({ imdbID }: MovieDetailPageProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get<Movie>(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // Stop loading after response
  }, [imdbID]);

  return <MovieDetail movie={movie} loading={loading} />;
};

export default MovieDetailPage;
