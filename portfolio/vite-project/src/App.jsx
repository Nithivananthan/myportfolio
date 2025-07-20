import React from 'react'
import Nav from './components/Nav'
import "./App.css"
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import image from './assets/IMG_20241106_134112.jpg'
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
function App() {
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
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
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
 <>
 <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home image={image}/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/skills' element={<Skills skills={skills}/>} />
    <Route path='/about' element={<About image={image}/>}/>
    </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
