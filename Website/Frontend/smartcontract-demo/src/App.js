import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import AdminPanel from './components/AdminPanel/AdminPanel';
import UserProfile from './components/UserProfile/UserProfile'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // Lưu thông tin người dùng đã đăng nhập
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      // Gửi yêu cầu đăng nhập đến server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        setLoggedInUser(user);
      } else {
        console.log('Đăng nhập thất bại');
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  };
  
  const handleRegister = async (username, password) => {
    try {
      // Gửi yêu cầu đăng ký đến server hoặc sử dụng dữ liệu cố định trên client
    // Ví dụ: tạo một tài khoản mẫu để thử nghiệm
    const mockUser = { username: 'exampleuser', isAdmin: false };
    setLoggedInUser(mockUser);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        setLoggedInUser(user);
      } else {
        console.log('Đăng ký thất bại');
      }
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
    }
  };
  
  const handleLogout = () => {
    // Gửi yêu cầu đăng xuất đến server hoặc xóa dữ liệu người dùng trên client
    setLoggedInUser(null);
  };
  

  const toggleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <button onClick={handleLogout}>Đăng Xuất</button>
          {loggedInUser.isAdmin ? (
            <AdminPanel />
          ) : (
            <div>
              <UserProfile user={loggedInUser} />
              <Dashboard />
            </div>
          )}
        </div>
      ) : (
        <div>
          {isRegistered ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <RegisterForm onRegister={handleRegister} />
          )}
          <p onClick={toggleRegistration}>
            {isRegistered
              ? 'Chưa có tài khoản? Đăng kí ngay!'
              : 'Đã có tài khoản? Đăng nhập ngay!'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
