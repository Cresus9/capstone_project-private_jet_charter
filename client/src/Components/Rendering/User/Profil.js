import React, { useEffect, useState } from 'react'
import UserBookings from './UserBookings'
import EditProfil from './EditProfil'
import CreateBooking from './CreateBooking'
import JetListings from '../Jet/JetListings'

import UserBookingHistory from './UserBookingHistory'
import './Profil.css'

export default function Profil({user, setUser, handleLogout}) {
  // console.log(user)
  
  const [display, setDisplay]= useState({page:''})
  const [bookings, setBookings]=useState([])
  const [seletedJet, setSelectedJet]=useState(null)
  
const showPage =()=>{
  switch (display.page) {
    // case "booking":
    //   return (
    //   <UserBookings 
    //   user={user} 
    //   bookings={bookings} 
    //   setBookings={setBookings}  
    //   />
    //   );
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


  

// console.log(user.first_name)
  return (
    <div className='profil_div'>
      <div className='welcome'>
      <h3>Welcome,{user.first_name}!</h3>
				<button >Edit Profile</button>
				<button onClick={handleLogout}>Sign Out</button>
      </div>
      <CreateBooking 
         user={user} 
         bookings={bookings} 
         setBookings={setBookings}
         jet={seletedJet}
         />
         <UserBookings 
      user={user} 
      bookings={bookings} 
      setBookings={setBookings}  
      />
         {/* <JetListings /> */}
      {showPage}
    </div>
  )
}
