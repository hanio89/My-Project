import React from 'react';

const AssetDetails = ({ asset }) => {
  return (
    <div>
      <h2>Thông tin tài sản: {asset.name}</h2>
      {/* Hiển thị thông tin chi tiết của tài sản */}
    </div>
  );
};

export { AssetDetails};
