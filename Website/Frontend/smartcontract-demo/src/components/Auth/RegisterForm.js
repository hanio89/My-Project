import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký và gọi hàm onRegister(username) khi đăng ký thành công
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>
        <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
        Quản trị viên
      </label>
      <button type="submit">Đăng Ký</button>
    </form>
  );
};

export default RegisterForm;
