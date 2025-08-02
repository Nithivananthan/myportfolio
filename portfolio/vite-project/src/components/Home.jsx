import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home({ image}) {
  const Navigate =useNavigate();
  function gotocontact(){
       Navigate('/contact')
  }
   const skills = [
    {
      name: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Express",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ];
  
  return (
    <div>
      <div className="profile-container">
        <div>
          <img className="profile-pic" src={image} />
        </div>
        <div className="profile-con">
          <h2 style={{ color: "rgb(23, 178, 230)" }}>Hello, I'm</h2>
          <h1>Nithivananthan M</h1>
          <h2>
            And I'm a
            <span style={{ color: "orange" }}> FullStack developer</span>
          </h2>
          <h2>
            I’m passionate about building full-stack web applications with
            clean, scalable code. I love working with MongoDB, Express, React,
            and Node.js to bring ideas to life.
          </h2>
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
          <br></br>
          <button onClick={gotocontact} className="hire-btn">Hire Me</button>{" "}
        <a href="/Black and White Clean Professional A4 Resume_20250406_095754_0000.pdf"><button className="contact-btn">Resume</button></a>
        <Link to='/about'><h2>Learn More About Me.</h2></Link>
        </div>
      </div>
       <div className="skills-container">
      <div className="skills-slider">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img className="icon-shadow"  src={skill.image} alt={skill.name} />
          </div>
        ))}
        {skills.map((skill, index) => (
          <div className="skill-item" key={`dup-${index}`}>
            <img className="icon-shadow" src={skill.image} alt={skill.name} />
           
          </div>
        ))}
        {skills.map((skill, index) => (
          <div className="skill-item" key={`dup-${index}`}>
            <img className="icon-shadow" src={skill.image} alt={skill.name} />
         
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Home;
