import React from 'react'
import './feature.css'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div className='feature-main-container'>

    <div className='feature-component'>
      <Link to="/models/ktm-naked">
      <img className="feature-img" src="https://s7g10.scene7.com/is/image/ktm/150669_%20KTM%20390%20DUKE%20MY%202017:Medium?wid=875&hei=657&dpr=off" alt="" />
      <p className='feature-subheading'>#GETDUKED</p>
      <h1 className='feature-heading'>KTM NAKED</h1>
      </Link>
      </div>

    <div className='feature-component'>
      <Link to="/models/ktm-advanture">
      <img className="feature-img" src="https://s7g10.scene7.com/is/image/ktm/390adv2020:Medium?wid=875&hei=657&dpr=off" alt="" />
      <p className='feature-subheading'>#GOADVENTURE</p>
      <h1 className='feature-heading'>KTM TRAVEL</h1>
      </Link>
    </div>

    <div className='feature-component'>
       <Link to="/models/ktm-sport">

      <img className="feature-img" src="https://s7g10.scene7.com/is/image/ktm/rc22-supermoto-abs-us:Medium?wid=875&hei=655&dpr=off" alt="" />
      <p className='feature-subheading'>RACE-BRED PERFORMANCE</p>
      <h1 className='feature-heading'>KTM SUPERSPORT</h1>
       </Link>
    </div>
    </div>
  )
}

export default Feature
