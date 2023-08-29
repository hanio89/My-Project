import React from 'react';
import SearchBar from './SearchBar';

const AssetSearch = ({ onAssetSearch }) => {
  const handleAssetSearch = (searchQuery) => {
    // Xử lý tìm kiếm tài sản dựa trên searchQuery
    onAssetSearch(searchQuery);
  };

  return <SearchBar onSearch={handleAssetSearch} placeholder="Tìm kiếm tài sản..." />;
};

export default AssetSearch;
