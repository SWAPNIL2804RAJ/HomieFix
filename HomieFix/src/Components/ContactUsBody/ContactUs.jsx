import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [Status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0n1fp5q', 'template_q7nm76i', form.current, 'sZ5tkyN3MOYZzLhSi',
      )
      .then(
        () => {
          setStatus('SUCCESS');
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          setStatus('FAILED');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='head1'>
    <h1 className='head'>  Contact Us </h1>
    <form ref={form} onSubmit={sendEmail}>
      <label> Your Name</label>
      <input type="text" name="from_name" />
      <label>Your Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    
    {Status === 'SUCCESS' && (
      <div className="success-message">
        <div className="tick-animation">
          <div className="tick"></div>
      </div>
        <p>Message sent successfully!</p>
      </div>
    )}
    {Status === 'FAILED' && (
      <div className="error-message">
        <p>Failed to send message! Please try again.</p>
      </div>
    )}
    </div>
  );
};

