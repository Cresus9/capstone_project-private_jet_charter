import React, { useEffect, useState } from 'react'
import UserBookings from './UserBookings'
import EditProfil from './EditProfil'
import CreateBooking from './CreateBooking'
import JetCard from '../Jet/JetCard'
import UserBookingHistory from './UserBookingHistory'
import './Profil.css'

export default function Profil({user, setUser, handleLogout}) {
  
  const [display, setDisplay]= useState({page:''})
  const [bookings, setBookings]=useState([])
  
const showPage =()=>{
  switch (display.page) {
    case "booking":
      return (
      <UserBookings 
      user={user} 
      bookings={bookings} 
      setBookings={setBookings}  
      />
      );
      case "bookingHistory":
      return (
      <UserBookingHistory 
      user={user} 
      bookings={bookings} 
      setBookings={setBookings}  
      />


      );
    case 'editProfile':
      return(
        <EditProfil 
        user={user} 
        setUser={setUser}
        />

      )
      default:
        return null
  }
}


  

console.log(user.first_name)
  return (
    <div>
      <div className='welcome'>
      <h3>name</h3>
				<button >Edit Profile</button>
				<button onClick={handleLogout}>Sign Out</button>
      </div>
      <CreateBooking 
         user={user} 
         bookings={bookings} 
         setBookings={setBookings}
         />
      {showPage}
    </div>
  )
}
