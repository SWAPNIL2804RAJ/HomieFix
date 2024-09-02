import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './custsignup.css';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from './util';

const CustSignup = () => {

  const navigate = useNavigate(); 

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    number: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    const { name, number, email, password } = signupInfo;
    console.log('signupInfo:', signupInfo);
    if (!name || !number || !email || !password) {
      return handleError('Please fill all the fields', { closeButton: false });
    }

    if (!email.includes('@')) {
      return handleError('Invalid email format', { closeButton: false });
    }

    if (number.length !== 10 || isNaN(number)) {
      return handleError('Phone number must be exactly 10 digits', { closeButton: false });
    }

    const passwordRegex = /^(?=.*[A-Z]).{4,}$/;
    if (!passwordRegex.test(password)) { 
      return handleError('Password must be at least 4 characters long and contain at least One Upper Case', { closeButton: false });
    }
    try{
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });
      
      const result = await response.json();
      const { success, message } = result;
      if (!success) {
        return handleError('User already exists. Please Login.', { closeButton: false });
      }

      else {
        handleSuccess('Signup successful!', { closeButton: false });
        
        setTimeout( () => {
          navigate('/UserDashboard');
        }, 1500)
      }

    }catch(err){
      handleError('Signup failed!', { closeButton: false });
    }

    // Add your signup logic here
    return handleSuccess('Signup successful !', { closeButton: false });
  };


  return (
    <div className='custsignup'>
      <h1>Register</h1>
      Welcome to HomieFix! Simplify your home maintenance and repair needs with ease. Sign up now to connect with trusted professionals and enjoy a hassle-free experience!
      <form onSubmit={handleSignup}>
        <div className='innerBox'>
          <div>

            <label htmlFor='name'>Name</label>
            <input
              onChange={handleChange}
              type='text'
              name='name'
              autoFocus
              placeholder='Enter Your Name'
              value={signupInfo.name}
            />
          </div>
          <div>
            <label htmlFor='number'>Phone Number</label>
            <input
              onChange={handleChange}
              type='text'
              name='number'
              placeholder='Enter Your Phone Number'
              value={signupInfo.number}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='Enter Your Email'
              value={signupInfo.email}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={signupInfo.password}
            />
          </div>
          <button >Signup</button>
          <span>Already have an account?
            <br /><Link to='/UserLogin'>Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer closeButton={false} />
    </div>
  );
}

export default CustSignup;
