import React, { useEffect, useState } from 'react'
import './Profil.css'
import UserBookings from './UserBookings'
import EditProfil from './EditProfil'
import CreateBooking from './CreateBooking'
import Booking from './Booking'
import Dashboard from './Dashboard'
import JetListings from '../Jet/JetListings'
import NavItem from '../../Welcome/NavItem'
import DropdowMenu from '../../Welcome/DropdowMenu'
import {FaFighterJet} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserBookingHistory from './UserBookingHistory'

import SignUp from '../../Welcome/SignUp'

export default function Profil({user, setUser, handleLogout, listings, bookme}) {
  // console.log(listings)
  
  const [display, setDisplay]= useState({page:''})
  const [bookings, setBookings]=useState([])
  const [seletedJet, setSelectedJet]=useState(null)
  const [logic, setLogic]=useState({page:''})

  const navigate = useNavigate();


  






// const showPage =()=>{
//   switch (display.page) {
//     case "booking":
//       return (
//       <UserBookings 
//       user={user} 
//       bookings={bookings} 
//       setBookings={setBookings}  
//       />
//       );
//       case "bookingHistory":
//       return (
//       <UserBookingHistory 
//       user={user} 
//       bookings={bookings} 
//       setBookings={setBookings}  
//       />


//       );
//     case 'editProfile':
//       return(
//         <EditProfil 
//         user={user} 
//         setUser={setUser}
//         />

//       )
//       default:
//         return null
//   }
// }


  

// console.log(user.first_name)
  return (
    <>
    <Dashboard handleLogout={handleLogout}/>
  <section  >
    <div className='profil'>
      <h1>MAKE YOUR RESERVATION</h1>

    </div>
    <div>
      <div>
        {/* <header className='header'>
            <ul className='nabar-nav'>
              <li> <a>My Profile</a> </li>
              <li> <a >My Bookings</a> </li>
              <li> <a >Travelers</a> </li>
            </ul>
            
          </header> */}
      </div>
      <div>
      {/* <button className='signout' onClick={handleLogout}>Sign Out</button> */}
        <h3>Welcome,{user.first_name}!</h3>
        {/* <button onClick={()=>navigate('/jets')}>Edit Profile</button> */}
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
        {/* <Booking 
        user={user} 
        bookings={bookings} 
        setBookings={setBookings}  /> */}
    </div>
  </section>
  {/* <JetListings jets={setContent}/> */}
  </>
  )
}

// <NavItem icon="✈️" />
//       <NavItem icon="✈️"/>
//       <NavItem icon="✈️"/>
//       <NavItem icon="✈️">
//       </NavItem>


      