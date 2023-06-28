import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import SocialLinks from './SocialLinks'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
function Portfolio() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <SocialLinks/>
    </div>
  )
}

export default Portfolio