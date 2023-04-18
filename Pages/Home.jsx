import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'


import './home.css'
import Feature from './Feature'

const Home = () => {
  return (
    <section>
      <Navbar img="home" para="OUT NOW!" heading="KTM REDBULL RIDER COLLECTION" >
      <Link to="/redbull-collection"><button className='btn-home'>Explore Now</button></Link>
    </Navbar>
   
    <Feature />
    </section>
  )
}

export default Home
