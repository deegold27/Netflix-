// components/SearchResults.tsx
import React, { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';

interface SearchResult {
  id: number;
  title: string;
  // Add other movie fields as needed
}

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear results when search query is empty
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.map((movie) => (
        <MovieCard overview={''} movieId={0} watchList={false} watchListId={''} youtubeUrl={''} year={0} age={0} time={0} videoSource={''} key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default SearchResults;
