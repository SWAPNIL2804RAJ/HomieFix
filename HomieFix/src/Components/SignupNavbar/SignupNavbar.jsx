import React from 'react'
import './signupNavbar.css'
import { useNavigate } from 'react-router-dom';

export const SignupNavbar = () => {

    const navigate = useNavigate();

  return (
    <div className="navbarmain">
    <nav className={`container `} >
        <span className='headerlogo'>
            HomieFix
        </span>
        
        <ul>
            <li onClick={() => navigate("/")}>
                Home
            </li>
            <li onClick={() => navigate("/About Us")}>
                About
            </li>
            <li onClick={() => navigate("/Contact Us")}>
                Contact Us
            </li>
            <li><button onClick={() => navigate("/LoginPage")} className='btn'>
                Login
            </button></li>
            
        </ul>
    </nav>
    </div>

  )
}
