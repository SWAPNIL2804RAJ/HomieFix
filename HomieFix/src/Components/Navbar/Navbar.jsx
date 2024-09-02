import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <nav className={`container ${sticky ? 'dark-nav' : 'transparent-nav'}`}>
            <span className='headerlogo' onClick={() => navigate("/")}>
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
                <li>
                    <button onClick={() => navigate("/LoginPage")} className='btn'>
                        Login
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate("/SignupPage")} className='btn'>
                        Sign Up
                    </button>
                </li>
            </ul>
        </nav>
    );
};
