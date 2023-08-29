import React, { useState } from 'react';
import UserList from './UserList';
import PermissionManagement from './PermissionManagement';

const AdminPanel = () => {
  const [users, setUsers] = useState([]); // Lưu danh sách người dùng
  const [selectedUser, setSelectedUser] = useState(null); // Lưu người dùng đang được chọn để cập nhật quyền hạn

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleUpdatePermission = (userId, permission) => {
    // Xử lý cập nhật quyền hạn ở đây và cập nhật lại danh sách người dùng
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <UserList users={users} onClick={handleUserClick} />
      {selectedUser && (
        <PermissionManagement user={selectedUser} onUpdatePermission={handleUpdatePermission} />
      )}
    </div>
  );
};

export default AdminPanel;
