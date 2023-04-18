import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../src/assets/images/navbar-logo.jpg'
import './home.css'

const Navbar = (props) => {
  return (
    <div className={`${props.img}-container`}>
      <header>
      <nav className='home'>
        <div className='home-item-links'>
        <span className='home-item'><Link to="/models">Models</Link></span>
        <span className='home-item'><Link to="/about">About</Link></span>
        </div>
        <Link to="/">
          <img className='home-logo' src={navlogo} alt="" />
          </Link>
      </nav>
      <div className="home-feature-section">
        <p>{props.para}</p>
        <h1>{props.heading}</h1>
        {props.children}
      </div>
    </header>
    </div>

  )
}

export default Navbar
