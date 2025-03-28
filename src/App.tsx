import axios from "axios";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MoviesList";
import MovieDetailPageWrapper from "./Components/MovieDetailWrapper";

const API_KEY = "6f04991e";
const API_URL = "https://www.omdbapi.com/";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

  const fetchMovies = async (query: string): Promise<void> => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get<{ Search: Movie[] }>(
        `${API_URL}?apikey=${API_KEY}&s=${query}`
      );
      setMovies(res.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Router>
      <div className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold text-center">Movie Search App</h1>
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
