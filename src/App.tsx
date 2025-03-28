import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MoviesList";
import MovieDetailPageWrapper from "./Components/MovieDetailWrapper";

const API_KEY = "6f04991e";
const API_URL = "https://www.omdbapi.com/";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const fetchMovies = useCallback(async (query: string): Promise<void> => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await axios.get<{ Search: Movie[] }>(
        `${API_URL}?apikey=${API_KEY}&s=${query}`
      );
      setMovies(res.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Router>
      <div
        className={`p-4 min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-400 text-black"
        }`}
      >
        {/* Header with Centered Title and Dark Mode Toggle */}
        <header className="flex justify-center items-center p-4 relative">
          <h1 className="text-3xl font-bold">Movie Search App</h1>
          <button
            className="absolute right-4 px-4 py-2 rounded-md border"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={fetchMovies} />
                <MovieList movies={movies} loading={loading} />
              </>
            }
          />
          <Route path="/movie/:imdbID" element={<MovieDetailPageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
