import React,{ useEffect, useState } from 'react'
import UserBookingCard from './UserBookingCard'
// import './Bookings.css'

export default function Bookings({user,setBookings,bookings}) {
  

  useEffect(() =>{
    fetch(`/booking/member/${user.id}`)
    .then((res) => {
      if (res.ok) {
        res.json().then((bookings) => {
          setBookings(bookings);
        });
      } else {
        res.json().then((errors) => console.log(errors));
      }
    })

  }, [])
  console.log(bookings)


  return (
    <div>
      {bookings.map((booking) =>
      <UserBookingCard key={booking.id} booking={booking}/>)}
    </div>
  )
}
