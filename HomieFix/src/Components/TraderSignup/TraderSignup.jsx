import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './tradersignup.css';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../../Components/CustSignup/util';

const TraderSignup = () => {

  const navigate = useNavigate(); 

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    number: "",
    city: "",
    state: "",
    pincode: "",
    dob: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    const { name, number, city, state, pincode, dob, email, password } = signupInfo;
    console.log('signupInfo:', signupInfo);
    if (!name || !city || !state || !pincode || !dob || !number || !email || !password) {
      return handleError('Please fill all the fields', { closeButton: false });
    }

    if (!email.includes('@')) {
      return handleError('Invalid email format', { closeButton: false });
    }

    if (number.length !== 10 || isNaN(number)) {
      return handleError('Phone number must be exactly 10 digits', { closeButton: false });
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      return handleError('Pincode must be exactly 6 digits', { closeButton: false });
    }

    const passwordRegex = /^(?=.*[A-Z]).{4,}$/;
    if (!passwordRegex.test(password)) { 
      return handleError('Password must be at least 4 characters long and contain at least One Upper Case', { closeButton: false });
    }
    try{
      const url = "http://localhost:8000/auth/Adminsignup";
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
          navigate('/AdminDashboard');
        }, 1500)
      }

    }catch(err){
      handleError('Signup failed! Please try again.', { closeButton: false });
    }

    // // Add your signup logic here
    // return handleSuccess('Signup successful !', { closeButton: false });
  };


  return (
    <div className='tradersignup'>
      <h1>Buisiness Register</h1>
      Join HomieFix today and connect with homeowners in need of your expertise. Simplify your work and grow your business by signing up now for a seamless experience in providing top-notch home maintenance and repair services!
      <form onSubmit={handleSignup}>
        <div className='innerBox10'>
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

            <label htmlFor='city'>City</label>
            <input
              onChange={handleChange}
              type='text'
              name='city'
              autoFocus
              placeholder='Enter Your City'
              value={signupInfo.city}
            />
          </div>
          <div>

            <label htmlFor='state'>State</label>
            <input
              onChange={handleChange}
              type='text'
              name='state'
              autoFocus
              placeholder='Enter Your State'
              value={signupInfo.state}
            />
          </div>
          <div>

            <label htmlFor='pincode'>Pincode</label>
            <input
              onChange={handleChange}
              type='number'
              name='pincode'
              autoFocus
              placeholder='Enter Area Pincode'
              value={signupInfo.pincode}
            />
          </div>
          <div>

            <label htmlFor='dob'>Date Of Birth</label>
            <input
              onChange={handleChange}
              type='date'
              name='dob'
              autoFocus
              placeholder='Enter Your Date Of Birth'
              value={signupInfo.dob}
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
            <br /><Link to='/AdminLogin'>Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer closeButton={false} />
    </div>
  );
}

export default TraderSignup;
