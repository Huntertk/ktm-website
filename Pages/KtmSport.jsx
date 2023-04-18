import React from 'react'
import Navbar from './Navbar'

function KtmSport() {
  return (
    <div>
      <Navbar img="ktmsport" para="KTM SUPERSPORT" heading="RACE-BRED PERFORMANCE" />
       <div className="naked-container">
        <h1 className='ktm-naked-title'>SUPER SPORT BIKE</h1>
        <div className="underline"></div>
      <div className="bike-container">

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-RC-125-MY23-GP-Inspired_%23SALL_%23AEPI_%23V1.jpg" alt="ktm 390" />
            <h1 className='bike-heading'>KTM RC 125 2023</h1>
            <p className='bike-subheading'>RACE-BRED PERFORMANCE</p>
        </div>

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_rc200-22-motogp-inspired_%23SALL_%23AEPI_%23V1.jpg" alt="ktm 390" />
            <h1 className='bike-heading'>KTM RC 200 2023</h1>
            <p className='bike-subheading'>EVERYDAY RACER</p>
        </div>

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_DET_KTM-RC-390-MY23-bodywork_%23SALL_%23AEPI_%23V1.jpg" alt="ktm 390" />
            <h1 className='bike-heading'>KTM RC 390 2023</h1>
            <p className='bike-subheading'>RACE-BRED PERFORMANCE</p>
        </div>

      </div>

      </div>


    </div>
  )
}

export default KtmSport
