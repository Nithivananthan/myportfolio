import React from "react";

function Project() {
  return (
    <div className="project-container">
      <div className="project-content">
        {/* Video */}
        <div className="video-section">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Food Ordering Web App Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Paragraph */}
        <div className="description-section">
          <h2>Food Ordering Web App</h2>
          <p>
            A MERN stack-based Food Ordering Web Application that allows users
            to browse food, filter by categories, add items to the cart, place
            orders, and track their order details. It includes secure login
            authentication and order management features.
          </p>
          <a
            href="https://github.com/YourGitHubRepo"
            target="_blank"
            rel="noopener noreferrer"
            className="view-code-btn"
          >
            View Code
          </a>
        </div>
      </div>
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

export default Project;
