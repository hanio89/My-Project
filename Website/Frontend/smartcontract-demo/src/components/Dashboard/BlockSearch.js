import React from 'react';
import SearchBar from './SearchBar/SearchBar';

const BlockSearch = ({ onBlockSearch }) => {
  const handleBlockSearch = (searchQuery) => {
    // Xử lý tìm kiếm khối blockchain dựa trên searchQuery
    onBlockSearch(searchQuery);
  };

  return <SearchBar onSearch={handleBlockSearch} placeholder="Tìm kiếm khối blockchain..." />;
};

export default BlockSearch;
