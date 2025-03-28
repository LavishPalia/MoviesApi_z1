import { Link } from "react-router-dom";

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

const MovieList = ({
  movies,
  loading,
}: {
  movies: Movie[];
  loading: boolean;
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {/* Show Skeletons when loading */}
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : movies.map((movie) => (
            <Link
              to={`/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="group"
            >
              <div className="border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
                {/* Movie Poster with Lazy Loading */}
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"
                  }
                  alt={movie.Title}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                {/* Movie Info */}
                <div className="p-3 text-center">
                  <h3 className="text-md font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {movie.Title}{" "}
                    <span className="text-gray-500">({movie.Year})</span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="animate-pulse border border-gray-200 bg-gray-100 rounded-lg shadow-md overflow-hidden">
    <div className="w-full h-64 bg-gray-300 rounded-t-lg"></div>
    <div className="p-3 text-center">
      <div className="h-4 bg-gray-400 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mt-2"></div>
    </div>
  </div>
);

export default MovieList;
