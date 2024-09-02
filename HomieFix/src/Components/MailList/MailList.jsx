import React, { useState } from "react";
import "./mailList.css"
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MailList = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubscribe = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            toast.error("Please enter your email address first!");
            return;
        }

        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        navigate('/SignupPage');
    }
    return(
        <div className="mail">
            <h1 className="mailTitle">Get Exclusive Home Repair Tips & Deals!</h1>
            <span className="mailDesc">Sign up and receive expert advice, special discounts, and the latest updates from HomieFix directly to your inbox.</span>
            <div className="mailInputContainer">
                <input 
                    type="email" 
                    placeholder="Your Email Id" 
                    value={email}
                    onChange={handleInputChange}
                    required/>
                <button 
                    onClick={handleSubscribe} 
                >
                    Suscribe
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default MailList;