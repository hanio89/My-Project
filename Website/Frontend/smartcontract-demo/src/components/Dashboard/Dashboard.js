import React from 'react';
import AssetSearch from './AssetSearch';
import UserSearch from './UserSearch';
import BlockSearch from './BlockSearch';

const Dashboard = () => {
  return (
    <div>
      <h2>Trang tổng quan</h2>
      <AssetSearch />
      <UserSearch />
      <BlockSearch />
    </div>
  );
};

export default Dashboard;
