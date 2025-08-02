import React from 'react'
import Nav from './components/Nav'
import "./App.css"
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import image from './assets/InShot_20250720_111756152.jpg'
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/footer';
import Welcome from './components/WelcomePage';
import Project from './components/Project';
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
   <Routes>
    <Route path='/' element={<Welcome image={image}/>}/>
    <Route path='/home' element={<><Nav/><Home image={image}/><Footer/></>} />
    <Route path='/contact' element={<><Nav/><Contact/><Footer/></>}/>
    <Route path='/skills' element={<><Nav/><Skills skills={skills}/><Footer/></>} />
    <Route path='/about' element={<><Nav/><About image={image}/><Footer/></>}/>
    <Route path='/project' element={<><Nav/><Project/><Footer/></>}/>
    </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
