import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập và gọi hàm onLogin(username) khi đăng nhập thành công
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Đăng Nhập</button>
    </form>
  );
};


export default LoginForm; // Đảm bảo export chính là 'default'