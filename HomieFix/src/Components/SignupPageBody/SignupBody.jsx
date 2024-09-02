// LoginBody.jsx
import React from 'react';
import './SignupBody.css';
import { useNavigate } from 'react-router-dom';


function SignupBody() {

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
              <strong className='strong-heading'>BUSINESS</strong>
              For
              <em>Skilled Tradespeople</em>
            </h2>
            <p>Unlocking tomorrow's spaces demands the precision of craftsmanship and the fiery passion within. Tradespeople, join us as we shape excellence together.</p>
            <button className='btn5' onClick={() => navigate("/AdminSignup")}>
              Sign Up
            </button>
            <div className='create-account'>
              Already have an account?
              <br />
              <a onClick={() => navigate("/LoginPage")}>Login</a>
            </div>
          </li>
          <li>
            <h2>
              For
              <strong>Customers</strong>
            </h2>
            <p>Begin your journey of finding skilled tradespeople who excel in their craft, all within your local area. Sign up now to tap into our network of top-rated professionals.</p>
            <button className='btn6' onClick={() => navigate("/UserSignup")}>
              Sign Up
            </button>
            <div className='create-account'>
              Already have an account?
              <br />
              {/* <a onClick={() => navigate("/Contact Us")}>Contact Us</a>
              or */}
              <a onClick={() => navigate("/LoginPage")}>Login</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SignupBody;
