import React, { useEffect, useState } from 'react'
import './Profil.css'
import UserBookings from './UserBookings'
import EditProfil from './EditProfil'
import CreateBooking from './CreateBooking'
import Booking from './Booking'
import Dashboard from './Dashboard'
import JetListings from '../Jet/JetListings'
import {FaFighterJet} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserBookingHistory from './UserBookingHistory'
import CreatePassenger from './CreatePassenger'
import CarouselCard from '../../Welcome/CarouselCard'

import SignUp from '../../Welcome/SignUp'

export default function Profil({user, setUser, handleLogout, listings, bookme}) {
  
  const [display, setDisplay]= useState({page:''})
  const [bookings, setBookings]=useState([])
  const [seletedJet, setSelectedJet]=useState(null)
  const [logic, setLogic]=useState({page:''})

  const navigate = useNavigate();


  





  


  return (
    <>
  <section  >
    <div className='profil'>
      <h1>MAKE YOUR RESERVATION</h1>

    </div>
    <div>
      <div>
        <h3>Welcome,{user.first_name}!</h3>
      </div>
      
    </div>
    <div>
      {listings.map((listing)=>{
        return <CreateBooking 
        key={listing.id}
        jet={listing}
        user={user} 
        bookings={bookings} 
        setBookings={setBookings}
        jets={listings}
                />
        })}
    </div>
  </section>
  </>
  )
}


      