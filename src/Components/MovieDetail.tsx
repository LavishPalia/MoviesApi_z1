import { Link } from "react-router-dom";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Actors: string;
  Plot: string;
}

const MovieDetail = ({
  movie,
  loading,
}: {
  movie: Movie | null;
  loading: boolean;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 p-6 max-w-4xl mx-auto text-gray-800">
      {/* Show Skeleton if Loading */}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          {/* Movie Poster */}
          <div className="w-full md:w-80 flex-shrink-0">
            <img
              src={movie?.Poster !== "N/A" ? movie?.Poster : "/placeholder.jpg"}
              alt={movie?.Title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Info */}
          <div className="mt-6 md:mt-0 text-center md:text-left flex-1">
            {/* <h2 className="text-3xl font-extrabold text-gray-300">
              {movie?.Title}{" "}
              <span className="text-gray-400">({movie?.Year})</span>
            </h2>

            <p className="mt-3 text-lg text-gray-400">
              <strong className="text-gray-300">Actors:</strong> {movie?.Actors}
            </p>

            <p className="mt-2 text-md text-gray-300 leading-relaxed">
              <strong className="text-gray-300">Plot:</strong> {movie?.Plot}
            </p> */}

            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              {movie?.Title}{" "}
              <span className="text-gray-500 dark:text-gray-200">
                ({movie?.Year})
              </span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              <strong className="text-gray-900 dark:text-gray-200">
                Actors:
              </strong>{" "}
              {movie?.Actors}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong className="text-gray-900 dark:text-gray-200">
                Plot:
              </strong>{" "}
              {movie?.Plot}
            </p>

            {/* Back to Search Button */}
            <Link
              to="/"
              className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              ← Back to Search
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col md:flex-row items-center md:items-start md:space-x-6 w-full">
    {/* Skeleton for Image */}
    <div className="w-full md:w-80 h-64 bg-gray-300 rounded-lg"></div>

    {/* Skeleton for Text */}
    <div className="mt-6 md:mt-0 flex-1 space-y-4">
      <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>

      <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>

      <div className="mt-6 h-10 bg-gray-300 rounded-full w-40"></div>
    </div>
  </div>
);

export default MovieDetail;
