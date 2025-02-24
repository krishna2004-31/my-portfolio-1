import React, { useState } from 'react';
import './Contect.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('/send-email', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Email sent successfully!');
        event.target.reset();
      } else {
        setFormStatus('Error sending email');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('Error sending email');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
      </p>

      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>

            {formStatus && <p className="form-status">{formStatus}</p>} 
          </form>
        </div>

        <div className="contact-info">
          <h2 className="info-title">Get in Touch</h2>
          <p className="info-text">
            You can also reach me through the following channels:
          </p>
          <ul className="info-list">
            <li>
              <i className="fas fa-envelope"></i>
              <span>Email: krishnasethyoyo321@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>Phone: +91 8264326977</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address: #186,Bhago Majra,Sarpanch Colony,Kharar,Mohali</span>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://github.com/krishna2004-31?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-seth-125124264/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/justttt_.krishna/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.715441366213!2d76.613014!3d30.753199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffacbb5f735fd%3A0xe86323f2c447eacf!2sKharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;