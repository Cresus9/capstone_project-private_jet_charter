import React from 'react'
import './JetCard.css'
import { useNavigate } from 'react-router-dom';


export default function JetCard({jet, bookme}) {
  const navigate = useNavigate();
  const handleBookingClick = () => {
    console.log("Please sign up to proceed")
    navigate('./Sign up');
  }

  return (
    <>
    <section className='jet_card'>
      
        <div className='jet_card_div'>
          <img src={jet.image} alt='' />
        </div>
        <span className='jet_card_div_detail'>
          <h1 className='title'>{jet.model} </h1>
          <p>{jet.manufacturer}</p>
          <p>{jet.max_range}</p>
          <p>{jet.total_passenger}</p>
          <p>{jet.speed}mph</p>
          <button onClick={handleBookingClick} className='bookme' >Book Me!</button>
        </span>
        
    </section>
    </>
  )
}
