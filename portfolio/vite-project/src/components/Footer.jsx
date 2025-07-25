import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div>
      <hr className="hr"></hr>
        <footer>
            <div className='footer-nav'>
                <ul>
                  <Link to='/about'><li>About</li></Link>
                   <Link to='/skills'><li>Skills</li></Link>
                    <li>Project</li>
                    <Link to ='/contact'><li>Contact</li></Link>
                </ul>
            </div>
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
  )
}

export default footer
