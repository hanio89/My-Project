import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Tên đăng nhập: {user.username}</p>
      <p>Quyền hạn: {user.isAdmin ? 'Quản trị viên' : 'Người dùng thường'}</p>
    </div>
  );
};

export default UserProfile;
