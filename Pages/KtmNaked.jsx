import React from 'react'
import './ktm_naked.css'
import Navbar from './Navbar'
import './ktm_naked.css'
const KtmNaked = () => {
  return (
    <div>
      <Navbar img="ktmnaked" para="KTM NAKED" heading="#GETDUKED" />
      <div className="naked-container">
        <h1 className='ktm-naked-title'>NAKED BIKE</h1>
        <div className="underline"></div>
      <div className="bike-container">

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_390-duke-india-orange-90-right_%23SALL_%23AEPI_%23V1.png" alt="ktm 390" />
            <h1 className='bike-heading'>KTM 390 DUKE</h1>
            <p className='bike-subheading'>THE CORNER ROCKET</p>
        </div>
        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_250-duke-my23-90-right_%23SALL_%23AEPI_%23V1.png" alt="ktm 390" />
            <h1 className='bike-heading'>KTM 250 DUKE</h1>
            <p className='bike-subheading'>THE THRILLER CHASER</p>
        </div>
        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_200-duke-india-my23-90-right_%23SALL_%23AEPI_%23V1.png" alt="ktm 390" />
            <h1 className='bike-heading'>KTM 200 DUKE</h1>
            <p className='bike-subheading'>LIGHT HEAVYWEIGHT</p>
        </div>

        <div className="feature-bike">
            <img className='bike-img' src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_125-duke-india-my23-90-right_%23SALL_%23AEPI_%23V1.png" alt="ktm 390" />
            <h1 className='bike-heading'>KTM 125 DUKE</h1>
            <p className='bike-subheading'>THE SPAWN OF THE BEAST</p>
        </div>

      </div>

      </div>
    </div>
  )
}

export default KtmNaked
