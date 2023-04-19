import React from 'react'
import Navbar from './Navbar'
import './redbull_feature.css'

const RedbullFeatures = () => {

  return (
    <> 
      <Navbar img="redbull" para="EMBRACE YOUR IDENTITY" heading="RED BULL KTM LIFESTYLE COLLECTIONS" />
      <div className="main-container-redbull">
        
        <div className="redbull-top-container">
          <div className="redbull-details">
            <h1>SEE THEM, BE THEM, LOOK LIKE THEM.</h1>
            <p>World championship motorcycle racers are ordinary people doing extraordinary things with the help of outstanding equipment and no shortage of risk. That's why they become heroes. The brand-new Red Bull Lifestyle collection is the best way to get closer to those Red Bull KTM stars, to show admiration and appreciation and look damn cool whether on the bike or sauntering up to the bar. </p>
          </div>
          <img className='redbull-logo' src="https://s7g10.scene7.com/is/image/ktm/RB%20KTM%20RT%202018%20RGB?wid=228&dpr=off" alt="ktm logo" />
        </div>
        <img  src="https://s7g10.scene7.com/is/image/ktm/RB-KTM-Collection--image-6:XLarge?wid=2363&hei=1350&dpr=off" alt="" className="middle-redbull-img" />

        <div className="middle-container">
            <h1>RED BULL KTM RACING SHRED COLLECTION.</h1>
            <p>The Red Bull KTM Racing Team Shred Collection is made for all dirtbike fans. From the impossible trails of the Carpathian Mountains and the depths of the Saudi Arabian desert all the way to the starting gate of any MX track. Approved by the likes of Mani Lettenbichler, Matthias Walkner and all the Red Bull KTM Factory Racing riders, the new collection will make it possible to live along with the stars.</p>
          </div>
          <div className="redbull-parallel-images-container">
            <img className='redbull-parallel-img' src="https://s7g10.scene7.com/is/image/ktm/493271_RED%20BULL%20KTM%20LIFESTYLE%20Collection%202023_RedBull%20Lifestyle%20Collection?wid=1000&dpr=off" alt="" />
            <img className='redbull-parallel-img' src="https://s7g10.scene7.com/is/image/ktm/493259_RED%20BULL%20KTM%20LIFESTYLE%20Collection%202023_RedBull%20Lifestyle%20Collection?wid=1000&dpr=off" alt="" />
          </div>

          <div className="redbull-last-container">
            <img className='middle-redbull-img' src="https://s7g10.scene7.com/is/image/ktm/Riders_Collection_1:XLarge?wid=1914&hei=1089&dpr=off" alt="" />
            <div className="middle-container">
              <h1>RED BULL KTM RIDERS COLLECTION.</h1>
            <p>Are you a Brad fan or a miller addict? Either way get your cap and shirt of your favorite RED BULL KTM Factory Riders. With its bold designs and the logos of Brad Binder and Jack Miller, the caps are sure to turn heads in the paddock and beyond. The shirts are made from premium materials and featuring eye-catching designs. So whether you're heading to the track for race day or just want to show off your MotoGP fandom around town, our collection of official caps and shirts has got you covered.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default RedbullFeatures
