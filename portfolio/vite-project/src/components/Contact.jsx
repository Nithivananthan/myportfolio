import React from "react";

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
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
      {/* Floating Icons Background */}
      <div className="floating-icons">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node-js"></i>
      </div>
    </div>
  );
}
export default Contact;
