import React, { useState } from "react";
import "./login.css";

import password_icon from "../assets/password.png";
import user_icon from "../assets/person.png";
import {useUser} from "./UserContext.jsx";
import {useNavigate} from "react-router-dom";

const LoginSignup = () => {
    const navigate = useNavigate();
    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();

      try{
        const response = await login({
          username,
          password,
        });
        if (response) {
          navigate('/')
        }

    } catch(error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form className="container2" method="POST" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">Log In</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <button className="submit">
          Login
        </button>
        <button className="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default LoginSignup;
