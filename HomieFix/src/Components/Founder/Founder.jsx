import React from 'react'
import './founder.css';
import founder_1 from '../../assets/swapnil.jpg';
import founder_2 from "../../assets/Ayush.jpeg";

export const Founder = () => {
  return (
    <div className='testimonial'>
        <h1 className='underline-animation'>The Visionaries Behind HomieFix</h1>
        <p className='founderpara'>Meet the dynamic duo who founded HomieFix, a platform that connects homeowners with 
        skilled artisans for home repair and maintenance services. Our founders are passionate individuals dedicated to 
        revolutionizing the home repair industry. With a shared vision for making repair services accessible and reliable, 
        they bring together a wealth of technical expertise and entrepreneurial spirit. Their commitment to excellence and 
        innovation drives HomieFix forward, setting new standards and ensuring customer satisfaction. Meet the visionaries 
        behind the success of HomieFix.</p>
        <div className="card">
          <ul>
            <li>
              <div className="cardover">
              <div className="user-info">
                <img className="img1 underline" src={founder_1} alt="Swapnil" />
                <div>
                  <h3>SWAPNIL RAJ</h3>
                  <span>Bihar, India</span>
                </div>
                </div>
                <p className='descrip'>
                Swapnil Raj is the visionary founder of HomieFix, a platform offering topnotch home repair and 
                maintenance services. A Final-year student at KIIT University from Bihar, Swapnil has expertly balanced 
                his studies with entrepreneurial pursuits. His technical expertise and practical experience have been 
                key in making HomieFix a trusted industry name. Driven by a passion for innovation and excellence, 
                Swapnil continues to set new standards in the home repair sector.
                </p>
              </div>
            </li>
            <li>
            <div className="cardover">
              <div className="user-info">
                <img className="img2 underline" src={founder_2} alt="Ayush" />
                <div>
                  <h3>AYUSH DEWANGAN</h3>
                  <span>Chattisgarh, India</span>
                </div>
                </div>
                <p className='descrip'>
                Ayush Dewangan is the co-founder of HomieFix, a premier platform for home repair and maintenance services. 
                As a Final-year student at KIIT University from Korba, Chattisgarh. Ayush has seamlessly integrated his 
                academic knowledge with entrepreneurial spirit. His technical skills and problem-solving abilities have 
                significantly contributed to HomieFix's success. Ayush's dedication to innovation and customer satisfaction 
                continues to drive the company forward, setting benchmarks in the industry.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <hr className="line" />
    </div>
  )
}

