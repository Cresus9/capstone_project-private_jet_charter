// import React, { useState } from 'react'

// export default function InitialBooking({use, bookings, setBookings}) {
//   const form ={
//     total_passenger:"",
//     date:"",
//     Time:"",
//     from:"",
//     to:"",
//   }
//   const [bookingForm, setBookingForm ]= useState([...form])
  
//   const changeHandler=(e)=>{
//     const update={
//       ...bookings,
//       [e.target.name]: e.target.value
//     }
//     setBookingForm(update)
//   }

//   const formHandler=(e)=>{
//     e.preventDefault()
//     fetch(`/bookings/member/${user.id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(bookingForm),
//     })
//       .then((res) => {
//         if (res.ok) {
//           res.json().then((bookings) => {
//             setBookings(bookings);
//           });
//         } else {
//           // figure out error handling
//           res.json().then((errors) => console.log(errors));
//         }
//       })
//   }
//   }


//   return (
//     <div>
//         <form className='booking_form'>
//         <span className='booking_form_input'>
//           <label> Total Passenger:
//             <input 
//              required
//               type='text'
//               name='number_of_passenger'
//               placeholder=''
//               value={}
//               onChange={changeHandler}
//             />
//             </label>
//             <label> Date:
//             <input
//              required
//               type='text'
//               name='Date'
//               placeholder=''
//               value={}
//               onChange={}
//             />
//             </label>
//             <label> Time:
//             <input 
//               required
//               name='time'
//               placeholder=''
//               value={}
//               onChange={}
//             />
//             </label>
//             <label> From:
//             <input
//               name='location'
//               placeholder=''
//               value={}
//               onChange={}
//             />
//             </label>
//             <label> To:
//             <input
//              required
//               type='text'
//               name='Date'
//               placeholder=''
//               value={}
//               onChange={}
//             />
//             </label>
//           <button type="submit">Submit</button>
//         </span>
//       </form>
//     </div>
//   )
// }
