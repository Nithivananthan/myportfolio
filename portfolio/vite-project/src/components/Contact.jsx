import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <form
        className="contact-form"
        action="mailto:mnithivananthan@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="Message"
          placeholder="Your Message"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;
