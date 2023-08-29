import React, { useState } from 'react';

const PermissionManagement = ({ user, onUpdatePermission }) => {
  const [permission, setPermission] = useState(user.permission); // Giả sử user.permission là quyền hạn hiện tại

  const handlePermissionUpdate = () => {
    onUpdatePermission(user.id, permission);
  };

  return (
    <div>
      <h2>Phân quyền cho {user.username}</h2>
      <label>
        Quyền hạn:
        <select value={permission} onChange={(e) => setPermission(e.target.value)}>
          <option value="user">Người dùng</option>
          <option value="admin">Quản trị viên</option>
        </select>
      </label>
      <button onClick={handlePermissionUpdate}>Cập nhật quyền</button>
    </div>
  );
};

export default PermissionManagement;
