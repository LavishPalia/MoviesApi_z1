import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms delay before calling API

    return () => clearTimeout(debounceTimer); // Cleanup previous timer
  }, [query]);

  return (
    <div className="p-4 flex justify-center">
      <input
        type="text"
        className="border p-2 w-80 rounded-md"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
