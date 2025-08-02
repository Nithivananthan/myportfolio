import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome({image}) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-container">
      <img src={image} alt="Profile" className="welcome-image" />
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
    </div>
  );
}

export default Welcome;
