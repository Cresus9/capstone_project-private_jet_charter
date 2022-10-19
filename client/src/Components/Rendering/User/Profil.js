import React, { useEffect, useState } from 'react'
import UserBookings from './UserBookings'
import EditProfil from './EditProfil'
import CreateBooking from './CreateBooking'
import './Profil.css'

export default function Profil({user, setUser}) {
  
  const [display, setDisplay]= useState('')
  const [bookings, setBookings]=useState([])
  
  


  return (
    <div>
      <CreateBooking user={user} bookings={bookings} setBookings={setBookings}/>
      <EditProfil user={user} setUser={setUser}/>
      <UserBookings user={user} bookings={bookings} setBookings={setBookings}  />
    </div>
  )
}
