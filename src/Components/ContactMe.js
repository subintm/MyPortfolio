import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const linkedInProfile = 'https://www.linkedin.com/in/subin-tm-468729288/'; // Replace with your LinkedIn profile URL
    const linkedInLink = `${linkedInProfile}`;
    window.open(linkedInLink, '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h4>Message subin</h4>
        <textarea
          className="message-input"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-button" onClick={handleSendMessage}>
          Send via LinkedIn
        </button>
      </div>
      
    </div>
  );
};

export default ContactMe;
