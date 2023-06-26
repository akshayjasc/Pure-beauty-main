import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';
import backgroundImage from '../img/login.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'dummyuser' && password === 'dummypassword') {
      console.log('Login successful');
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div className="login-section">
      <div className="container">
        <LoginHeader />
        <div className="row">
          <div className="col-lg-4">
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
              handleLogin={handleLogin}
            />
          </div>
          <div className="col-lg-8">
            <div className='img-container'>
              <img src={backgroundImage} alt="Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
