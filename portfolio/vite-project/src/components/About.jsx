import React, { use } from "react";
import { useNavigate } from "react-router-dom";

function About({ image }) {
  const navigate =useNavigate();
  function nav(){
    navigate('/skills')
  }
  return (
    <div>
      <div className="about-container">
        <div className="about-image">
          <img className="profile-pic" src={image} />
        </div>
        <div className="about-content">
          <h2>
            Hey there, I'm
            <span style={{ color: "rgb(23, 178, 230)" }}>
              {" "}
              Nithivananthan M{" "}
            </span>
          </h2>
          <h2>
            and I'm a{" "}
            <span style={{ color: "orangered" }}>Full Stack Developer </span>,
          </h2>
          <h3>
            {" "}
            I’m passionate about building full-stack web applications with
            clean, scalable code. I love working with MongoDB, Express, React,
            and Node.js to bring ideas to life.
          </h3>
          <a href="mailto:mnithivananthan@gmail.com">
            <h3>mnithivananthan@gmail.com</h3>
          </a>
          <a
            href="/Black and White Clean Professional A4 Resume_20250406_095754_0000.pdf"
            download
          >
            <button>Download Resume</button>
          </a>
          <a href="/Black and White Clean Professional A4 Resume_20250406_095754_0000.pdf">
            <button>View Resume</button>
          </a>
          <br></br>
          <a href="https://www.facebook.com/m.nithivananthan.9">
            <i
              style={{ color: "blue" }}
              class="fab fa-facebook-f text-blue-600 text-2xl mr-4"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/m-nithivananthan-179b95314">
            <i
              style={{ color: "white" }}
              class="fab fa-linkedin-in text-blue-500 text-2xl mr-4"
            ></i>
          </a>
          <a href="https://www.github.com/nithivananthan">
            <i
              style={{ color: "white" }}
              class="fab fa-github text-white text-2xl mr-4"
            ></i>
          </a>
          <a href="https://www.instagram.com/nithivananthan.m" target="_blank">
            <i
              style={{ color: "orangered" }}
              class="fab fa-instagram text-pink-500 text-2xl"
            ></i>
          </a>
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <h2 style={{ color: "rgb(23, 178, 230)" }}>college</h2>
        <h3>B.E in Computer Science and Engineering (2022-2026)</h3>
        <p>
          I am Currently in my final year of Bachelor of Computer Science and
          Engineering at Dhirajlal Gandhi college of Technology,salem,Tamil
          Nadu,India.{" "}
        </p>
        <h3>Current CGPA:8.0</h3>
        <h2 style={{ color: "rgb(23, 178, 230)" }}>Schooling</h2>
        <p>
          I have completed my Schooling at Sri Gayathri Higher Secondary
          School,Salem,Tamil Nadu,India.
        </p>
        <h3>
          SSLC Percentage :81% <h3>HSC :72.8%</h3>
        </h3>
      </div>
      <div className="skill">
        <h1>Skill</h1>
        <h3>
          I have strong skills in full-stack development using the <span style={{color:'rgb(23, 178, 230)'}}>MERN stack</span> {" "}
          <span style={{color:"orangered"}}>(MongoDB, Express, React, Node.js)</span>. I’m also confident in using tools
          like Git, GitHub, Postman, and modern frontend libraries like Tailwind
          CSS.
        </h3>
        <button onClick={nav}>View Skills</button>
      </div>
    </div>
  );
}
export default About;
