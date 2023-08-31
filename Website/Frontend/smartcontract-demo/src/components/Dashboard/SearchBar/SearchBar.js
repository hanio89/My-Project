import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
