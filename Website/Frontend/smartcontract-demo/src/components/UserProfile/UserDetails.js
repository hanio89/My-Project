import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Thông tin người dùng: {user.username}</h2>
      {/* Hiển thị thông tin chi tiết của người dùng */}
    </div>
  );
};

// Tương tự như UserDetails, hiển thị thông tin chi tiết về tài sản, lịch sử giao dịch, ...
