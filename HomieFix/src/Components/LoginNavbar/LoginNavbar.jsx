import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './loginNavbar.css';

export const LoginNavbar = () => {

    // const [sticky, setSticky] = React.useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY > 60){    
    //             setSticky(true);
    //         }else{
    //             setSticky(false);
    //         }
    //     })
    // },[])

    const navigate = useNavigate();

  return (
    <div className="navbarmain">
    <nav className='container' >
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
            <li><button onClick={() => navigate("/SignupPage")} className='btn'>
                Sign Up
            </button></li>
            
        </ul>
    </nav>
    </div>
  )
}
