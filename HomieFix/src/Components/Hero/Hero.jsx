import React from 'react'
import './hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

  return (
    <div className='heropic container'>
        <div className="hero-txt">
            <h1>
            A Complete Solution for your New Home .
            </h1>
            <p>Transform your home into a sanctuary of comfort and creativity with our complete solutions for both living and artistic expression.</p>
            <ul>
                <li>
            <button onClick={() => navigate("/LoginPage")} className='homepagebttn1'>
                Login
            </button>
            </li>
            <li>
            <button onClick={() => navigate("/SignupPage")} className='homepagebttn2'>
                Sign Up
            </button>
            </li>
            </ul>
            <p>We empower homeowners to build their dream spaces with skilled artisans, while helping craftsmen find fulfilling opportunities to showcase their talents</p> 
        </div>
    </div>
  )
}

export default Hero