import { Link } from "react-router-dom";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Actors: string;
  Plot: string;
}

const MovieDetail = ({ movie }: { movie: Movie }) => (
  <div className="flex flex-col items-center p-6 max-w-3xl mx-auto text-gray-800">
    {/* Movie Poster */}
    <div className="w-full md:w-96">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={movie.Title}
        className="w-full rounded-lg shadow-lg"
      />
    </div>

    {/* Movie Info */}
    <div className="text-center mt-6">
      <h2 className="text-3xl font-extrabold text-gray-900">
        {movie.Title} <span className="text-gray-500">({movie.Year})</span>
      </h2>

      <p className="mt-3 text-lg text-gray-600">
        <strong className="text-gray-900">Actors:</strong> {movie.Actors}
      </p>

      <p className="mt-2 text-md text-gray-700 leading-relaxed">
        <strong className="text-gray-900">Plot:</strong> {movie.Plot}
      </p>
    </div>

    {/* Back to Search Button */}
    <Link
      to="/"
      className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
    >
      ← Back to Search
    </Link>
  </div>
);

export default MovieDetail;
