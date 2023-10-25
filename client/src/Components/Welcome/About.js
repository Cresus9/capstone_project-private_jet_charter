import React from 'react'
import image1 from '../assets/image/pics/shutterstock_1158453706.jpg'
import image2 from '../assets/image/pics/shutterstock_1928348165.jpg'
import image3 from '../assets/image/pics/pexels-asad-photo-maldives-1430676.jpg'
import './Home.css'

export default function About() {
  return (
    <>
    <div className='about_items'>
        
        <div className='about_item'>
            <img src={image1} alt='Business flights' />
            <h4>Effortless Business Travels</h4>
            <p>Redefine your business journeys. Benefit from unmatched privacy, flexibility, and convenience. Bypass commercial airport hassles and reach your commitments with style.</p>
        </div>
        
        <div className='about_item'>
            <img src={image2} alt='Entertainment travels' />
            <h4>Entertainment Like Never Before</h4>
            <p>Whether it's a concert, show, or a special night out, elevate your experience. Travel with panache and comfort, making every moment memorable.</p>
        </div>
        
        <div className='about_item'>
            <img src={image3} alt='Glamorous vacation' />
            <h4>Customized Vacations</h4>
            <p>Break free from fixed itineraries. Craft your own journey, tailored just for you. Be it business or leisure, travel the skies in unrivaled luxury.</p>
        </div>
        
    </div>
    </>
  )
}
