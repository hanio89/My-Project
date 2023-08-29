import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

const PermissionManagement = ({ user, onUpdatePermission }) => {
  const handlePermissionUpdate = (permission) => {
    // Xử lý cập nhật quyền hạn và gọi hàm onUpdatePermission(userId, permission)
  };

  return (
    <div>
      <h2>Phân quyền cho {user.username}</h2>
      {/* Hiển thị quyền hạn hiện tại của user và cho phép cập nhật */}
    </div>
  );
};
export default UserList; // Đảm bảo export chính là 'default'