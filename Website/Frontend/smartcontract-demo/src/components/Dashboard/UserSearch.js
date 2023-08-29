import React from 'react';
import SearchBar from './SearchBar';

const UserSearch = ({ onUserSearch }) => {
  const handleUserSearch = (searchQuery) => {
    // Xử lý tìm kiếm người dùng dựa trên searchQuery
    onUserSearch(searchQuery);
  };

  return <SearchBar onSearch={handleUserSearch} placeholder="Tìm kiếm người dùng..." />;
};

export default UserSearch;
