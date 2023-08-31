import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './AssetSearch.css'; // Import file CSS để tùy chỉnh giao diện

const AssetSearch = ({ onAssetSearch }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleAssetSearch = (searchQuery) => {
    // Xử lý tìm kiếm tài sản dựa trên searchQuery
    const results = onAssetSearch(searchQuery);
    setSearchResults(results);
  };

  return (
    <div className="asset-search">
      <SearchBar onSearch={handleAssetSearch} placeholder="Tìm kiếm tài sản..." />
      <table className="asset-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Id</th>
            <th>Owner</th>
            <th>Color</th>
            <th>Appraised Value</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>{asset.id}</td>
              <td>{asset.owner}</td>
              <td>{asset.color}</td>
              <td>{asset.appraisedValue}</td>
              <td>{asset.size}</td>
              <td>
                <button className="action-button">Transfer</button>
                <button className="action-button">Edit</button>
                <button className="action-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetSearch;
