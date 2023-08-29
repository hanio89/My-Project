import React from 'react';

const PermissionHistory = ({ permissionHistory }) => {
  return (
    <div>
      <h2>Lịch sử phân quyền</h2>
      <ul>
        {permissionHistory.map((entry) => (
          <li key={entry.id}>
            {entry.date}: {entry.oldPermission} → {entry.newPermission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export {PermissionHistory };
