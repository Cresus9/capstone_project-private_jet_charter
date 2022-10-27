import React from 'react'

export default function PassengerCard({passenger, user}) {


  return (
    <section className='booking-display'>
        <h3>Guest list</h3>
        <div>
          <div className='location'>
            <h6>{passenger.first_name}</h6>
          </div>
          <div className='date'>
            <span className='date-span'>
            <h6>{passenger.last_name}</h6>
            <h6>{passenger.birthdate}</h6>
            </span>
          </div>
          <div className='passenger'>
            <h6>{passenger.email} </h6>
            <h6>{passenger.nationality} </h6>
            <span>Booked by</span>
            <h5>{user.name} Justin</h5>
          </div>
        </div>
        
    </section>
    
  )
}
