import React from 'react'
import './JetCard.css'

export default function JetCard({jet, bookme}) {

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
          <button onClick={(e)=>("Please Sigin to proceed")} className='bookme' >Book Me!</button>
        </span>
        
    </section>
    </>
  )
}
