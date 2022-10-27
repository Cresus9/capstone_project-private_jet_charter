// import React,{ useEffect, useState } from 'react'
// import UserBookingCard from './UserBookingCard'
// import './UserBookings.css'
// import {FaPlaneDeparture,FaPlaneArrival} from 'react-icons/fa'
// import {BsFillPeopleFill} from 'react-icons/bs'
// import {AiOutlineFieldTime} from 'react-icons/ai'

// export default function UserBookings({user,setBookings,bookings}) {
  

//   useEffect(() =>{
//     fetch(`/booking/member/${user.id}`)
//     .then((res) => {
//       if (res.ok) {
//         res.json().then((bookings) => {
//           setBookings(bookings);
//         });
//       } else {
//         res.json().then((errors) => console.log(errors));
//       }
//     })

//   }, [])
//   console.log(bookings)

//   // const list = bookings.map((booking)=>{
//   //   <UserBookingCard key={booking.id} booking={booking}/>
//   // })

// console.log(bookings)
//   return (
//     // {list}
   
//     <section className='booking-display'>
//         {/* <h3>Flight Info:</h3>
//         <div>
//           <div className='location'>
//             <h6> <FaPlaneDeparture/>{bookings.from} to {bookings.to} <FaPlaneArrival/></h6>
//             <button className='btn-manage'>Manage Booking</button>
//           </div>
//           <div className='date'>
//             <span className='date-span'>Departure time</span>
//             <h6>{bookings.date}</h6>
//             <h6><AiOutlineFieldTime/> {bookings.time}</h6>
//           </div>
//           <div className='passenger'>
//             <h6><BsFillPeopleFill/>{bookings.total_passenger} </h6>
//             <span>Booked by</span>
//             <h5>{user.name}</h5>
//           </div>
//         </div> */}
        
//     </section>
//   )
// }
