import React from 'react'
import Navbar from './Navbar'
import './about.css'

const About = () => {
  return (
    <div>
      <Navbar img="ktmabout" para="KTM 390 ADVANTURE" heading="ADVANTURE MORE" />

      <div className="about">
        <h1>Developer Information</h1>
        <h2>Developed By MD TAUFIK</h2>
        <p>This Website Build For Education Purpose.</p>
      </div>
    </div>
  )
}

export default About
