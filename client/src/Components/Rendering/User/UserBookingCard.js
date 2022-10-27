import React from 'react'
import './UserBookingCard.css'

export default function UserBookingCard({user, booking}) {
  console.log(booking)
  return (
    <section className='booking-display'>
        <h3>Flight Info:</h3>
        <div>
          <div className='location'>
            <h6> <FaPlaneDeparture/>{booking.from} to {booking.to} <FaPlaneArrival/></h6>
            <button className='btn-manage'>Manage Booking</button>
          </div>
          <div className='date'>
            <span className='date-span'>Departure time</span>
            <h6>{booking.date}</h6>
            <h6><AiOutlineFieldTime/> {booking.time}</h6>
          </div>
          <div className='passenger'>
            <h6><BsFillPeopleFill/>{booking.total_passenger} </h6>
            <span>Booked by</span>
            <h5>{user.name}</h5>
          </div>
        </div>
        
    </section>
  )
}
