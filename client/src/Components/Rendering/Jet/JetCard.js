import React from 'react'
import './JetCard.css'

export default function JetCard({jet}) {
  return (
    <div className='jet_card'>
      <span>
        <img src={jet.image} alt='' />
      </span>
      <span>
        <p><strong>{jet.model}</strong> </p>
        <p> <i>{jet.manufacturer}</i> </p>
        <p>{jet.$`{max_range}`}</p>
        <p>{jet.$`{total_passenger}`}</p>
        <p>{jet.speed}</p>
      </span>


    </div>
  )
}
