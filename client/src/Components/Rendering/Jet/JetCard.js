import React from 'react'
import './JetCard.css'

export default function JetCard({jet}) {
 
  return (
    <div className='jet_card'>
      <span>
        <img src={jet.image} alt='' className='jet_card_image'/>
      </span>
      <span className='jet_card_info'>
        <p>{jet.model} </p>
        <p>{jet.manufacturer}</p>
        {/* <p>{`${max_range}`}</p>
        <p>{`${total_passenger}`}</p> */}
        <p>{jet.speed}mph</p>
      </span>


    </div>
  )
}
