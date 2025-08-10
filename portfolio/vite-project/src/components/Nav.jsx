import React, { use, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [sidenav, setsidenav] = useState(false);
  return (
    <div>
      <div className="nav">
        <div>
          <h1 className="nav-name">Nithivananthan M</h1>
        </div>
        <div>
          <ul className="nav-container">
            <Link to="/home">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/skills">
              <li className="nav-item">Skills</li>
            </Link>
            <Link to="/project">
              <li className="nav-item">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
          <div className="nav-menu" onClick={() => setsidenav(true)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="side-nav" style={{ display: sidenav ? "block" : "none" }}>
        <div className="nav-cancel" onClick={() => setsidenav(false)}>
          <i className="fas fa-times"></i>
        </div>
        <div>
          <ul className="side-container">
            <Link to="/">
              <li className="side-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="side-item">About</li>
            </Link>
            <Link to="/skills">
              <li className="side-item">Skills</li>
            </Link>
            <Link to="/project">
              <li className="side-item">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="side-item">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
