// pages/search-results.tsx
import React from 'react';
import SearchResults from '../components/SearchResults';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchResultsPage: React.FC = () => {

    const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div>
         <h1>Search Results</h1>
      <p>Query: {query}</p>
      <SearchResults query={query as string} />
    </div>
  );
};

export default SearchResultsPage;
