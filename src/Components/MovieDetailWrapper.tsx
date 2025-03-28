import { useParams } from "react-router-dom";
import MovieDetailPage from "./MovieDetailPage";

const MovieDetailPageWrapper = () => {
  const { imdbID } = useParams();
  return imdbID ? (
    <MovieDetailPage imdbID={imdbID} />
  ) : (
    <div>Invalid IMDb ID</div>
  );
};

export default MovieDetailPageWrapper;
