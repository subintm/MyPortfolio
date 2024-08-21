import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const phoneNumber = '9072711430'; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <textarea
          className="message-input"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-button" onClick={handleSendMessage}>
          Chat With Subin
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
