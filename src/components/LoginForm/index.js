import BtnOutline from '../Buttons/BtnOutline';
import './style.css'

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange, handleLogin }) => {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <BtnOutline />
        <p className="text-center">
          Login Or 
          <a href="/" className="text-link">Shop</a>
        </p>
      </div>
    );
  };
  
  export default LoginForm;