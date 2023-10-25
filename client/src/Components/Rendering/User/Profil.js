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
import Profillntro from './ProfilIntro'

import SignUp from '../../Welcome/SignUp'

export default function Profil({user, setUser, handleLogout, listings, bookme}) {
  
  const [display, setDisplay]= useState({page:''})
  const [bookings, setBookings]=useState([])
  const [seletedJet, setSelectedJet]=useState(null)
  const [logic, setLogic]=useState({page:''})
  const [activeBookingId, setActiveBookingId] = useState(null);


  const navigate = useNavigate();


  





  


  return (
    <>
    <Profillntro user={user}/>
    <section className='profile-section'>
      <div className='user-info'>
          
        </div>
        <div className='header'>
          <h1>MAKE YOUR RESERVATION</h1>
        </div>
        {listings.map((listing) => (
          <div key={listing.id}>
            <section className='jet_card'>
              <div className='jet_card_div'>
              <img src={listing.image} alt='' />
              </div>
              <span className='jet_card_div_detail'>
              <h1 className='title'>{listing.model} </h1>
              <p>{listing.manufacturer}</p>
              <p>{listing.max_range}</p>
              <p>{listing.total_passenger}</p>
              <p>{listing.speed}mph</p>
              </span>
            </section>
            <button onClick={() => setActiveBookingId(listing.id)}>
              Book {listing.name} {/* Adjust as needed based on listing properties */}
            </button>
            {activeBookingId === listing.id && (
              <CreateBooking 
                selectedJet={listing}
                user={user} 
                bookings={bookings} 
                setBookings={setBookings}
              />
            )}
          </div>
        ))}
      </section>
    </>
  )
}
 






    {/* <section className='profile-section'>
    <Profillntro user={user} />

    <div className='bookings'>
      {listings.map((listing) => (
        <CreateBooking 
          key={listing.id}
          jet={listing}
          user={user} 
          bookings={bookings} 
          setBookings={setBookings}
          jets={listings}
        />
      ))}
    </div>
</section> */}

//   </>
//   )
// }


      