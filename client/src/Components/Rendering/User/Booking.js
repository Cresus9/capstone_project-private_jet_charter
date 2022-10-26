import React,{ useState } from 'react'
import userBookingHistory from './UserBookingHistory'
import UserBooking from './UserBookings'
import './Booking.css'

export default function Booking({user,bookings,setBookings}) {


    return(
        <>
            

        <section className='whole'>
            <h1>Bookings</h1>
            <div>
                {/* <p className='one'>Upcoming</p>
                <p className='two'>Past</p> */}
            </div>
            <div className='upcoming'>
                {/* <UserBooking 
                user={user} 
                bookings={bookings} 
                setBookings={setBookings} 
                    /> */}

            </div>
            <div className='history'>
                {/* <userBookingHistory 
                user={user} 
                bookings={bookings} 
                setBookings={setBookings}  /> */}

            </div>
        </section>
        </>
    )

  
}
