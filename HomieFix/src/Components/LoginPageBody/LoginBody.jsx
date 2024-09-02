// LoginBody.jsx
import React from 'react';
import './LoginBody.css';
import { useNavigate } from 'react-router-dom';


function LoginBody() {

  const navigate = useNavigate();

  return (
    <div className="login-body">
      
      <div className="login-body-container">
      {/* <h2 className='heading'>Welcome back! Let's continue your journey together. 
            Sign in now !
        </h2> */}
        <ul> 
          <li>
            <h2>
              <strong className='strong-heading2'>BUSINESS</strong>
              For
              <em>Skilled Tradespeople</em>
            </h2>
            <p>Crafting excellence requires precision and passion. Tradespeople, login to continue shaping tomorrow's spaces.</p>
            <button className='btn5' onClick={() => navigate("/AdminLogin")}>
              Login
            </button>
            <div className='create-account'>
              Don't have an account?
              <br />
              <a onClick={() => navigate("/Contact Us")}>Contact Us</a>
              or
              <a onClick={() => navigate("/About Us")}>Get free trial</a>
            </div>
          </li>
          <li>
            <h2>
              For
              <strong>Customers</strong>
            </h2>
            <p>Discover top-rated tradespeople in your area and join our vibrant community. Sign in now to connect with the best professionals nearby.</p>
            <button className='btn6' onClick={() => navigate("/UserLogin")}>
              Login
            </button>
            <div className='create-account'>
              Don't have an account?
              <br />
              <a onClick={() => navigate("/Contact Us")}>Contact Us</a>
              or
              <a onClick={() => navigate("/SignupPage")}>Sign Up</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginBody;
