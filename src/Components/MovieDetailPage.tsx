import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";

const API_KEY = "6f04991e";
const API_URL = "https://www.omdbapi.com/";

interface MovieDetailPageProps {
  imdbID: string;
}

const MovieDetailPage = ({ imdbID }: MovieDetailPageProps) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [imdbID]);

  return movie ? <MovieDetail movie={movie} /> : <p>Loading...</p>;
};

export default MovieDetailPage;
