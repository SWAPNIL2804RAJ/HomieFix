import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../CustSignup/util';
import './traderlogin.css';

const TraderLogin = () => {

  const navigate = useNavigate(); 

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Please fill all the fields', { closeButton: false });
    }
    try {
      const url = "http://localhost:8000/auth/Adminlogin";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/AdminDashboard')
        }, 1500);
      } else {
        handleError(message, { closeButton: false });
      }
    } catch (err) {
      handleError('Something went wrong. Please try again later.', { closeButton: false });
    }
  }

  return (
    <div className='traderlogin'>
      <h1>Business Login</h1>
      Welcome back! Log in to continue your journey with us
      <form>
        <div className='innerBox20'>  
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='Enter Your Email Id'
              value={loginInfo.email}
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={loginInfo.password}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          <span>Don't have an account? 
            <br /><Link to='/AdminSignup'>Signup</Link>
          </span>
        </div>
      </form>
      <ToastContainer closeButton={false}/>    
      {/* koi bhi toast notification aayega toh yeh ToastContainer usko display karega */}
    </div>
  )
}

export default TraderLogin;
