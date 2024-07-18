/// components/SearchInput.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
