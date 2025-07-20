import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home({ image }) {
  const Navigate =useNavigate();
  function gotocontact(){
       Navigate('/contact')
  }
  return (
    <div>
      <div className="profile-container">
        <div>
          <img className="profile-pic" src={image} />
        </div>
        <div className="profile-con">
          <h2 style={{ color: "rgb(23, 178, 230)" }}>Hello,I'm</h2>
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
          <button className="hire-btn">Hire Me</button>{" "}
         <button className="contact-btn" onClick={gotocontact}>Contact Me</button>
        <Link to='/about'><h2>Learn More About Me.</h2></Link>
        </div>
        <hr className="hr"></hr>
        <footer>
          <div>
            <a href="https://www.facebook.com/m.nithivananthan.9">
              <i
                style={{ color: "blue" }}
                class="fab fa-facebook-f text-blue-600 text-2xl mr-4"
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/m-nithivananthan-179b95314">
              <i
                style={{ background: "blue", color: "white" }}
                class="fab fa-linkedin-in text-blue-500 text-2xl mr-4"
              ></i>
            </a>
            <a href="https://www.github.com/nithivananthan">
              <i
                style={{ background: "black", color: "white" }}
                class="fab fa-github text-white text-2xl mr-4"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/nithivananthan.m"
              target="_blank"
            >
              <i
                style={{ color: "orangered" }}
                class="fab fa-instagram text-pink-500 text-2xl"
              ></i>
            </a>
          </div>
          <div>
            <a href="mailto:mnithivananthan@gmail.com">
            <h3>mnithivananthan@gmail.com</h3>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Home;
