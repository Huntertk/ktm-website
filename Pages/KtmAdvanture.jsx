import React from 'react'
import './ktm_advanture.css'
import Navbar from './Navbar'

const KtmAdvanture = () => {
  return (
    <div>
      <Navbar img="ktmadvanture" para="KTM 390 ADVANTURE" heading="ADVANTURE MORE" />
        <div className="naked-container">
        <h1 className='ktm-naked-title'>ADVANTURE BIKE</h1>
        <div className="underline"></div>
      <div className="bike-container">

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_LI_MY23-KTM-390-Adventure-X-ORANGE-90-Right-INDIA_%23SALL_%23AEPI_%23V1.png" alt="ktm 390" />
            <h1 className='bike-heading'>KTM 390 ADVANTURE X 2023</h1>
            <p className='bike-subheading'>THE LONG-RANGE SUPERMOTO WEAPON</p>
        </div>

      </div>
      </div>

    </div>
  )
}

export default KtmAdvanture
