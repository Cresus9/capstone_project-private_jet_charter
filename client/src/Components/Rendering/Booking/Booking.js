// import React,{ useState } from 'react'
// import './Booking.css'

// export default function Booking({user}) {
//   const [reverse, setReserve]=useState([])
//   const [errors, setErrors]=useState([])
//   const [numberOfPassenger, setNumberOfPassenger] = (null)
  
// const changeHandler = (e)=>{
//   setNumberOfPassenger(e.target.value)
// }
// const formHandler = (e)=>{
//   e.preventDefault()
//   fetch(`/bookings/member/${user.id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(numberOfPassenger),
//   })
//     .then((res) => {
//       if (res.ok) {
//         res.json().then((reserve) => {
//           setReserve(reserve);
//         });
//       } else {
//         res.json().then((data) => setErrors(data.errors));
//       }
//     })
  
// }


//   return (
//     <div>
//       <form className='booking_form'>
//         <span className='booking_form_input'>
//           <label> Total Passenger:
//             <input 
//              required
//               type='text'
//               name='number_of_passenger'
//               placeholder=''
//               value={}
//               onChange={}
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
//             <label> Location:
//             <input
//               name='location'
//               placeholder=''
//               value={}
//               onChange={}
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
//             <label> Location:
//             <input
//               name='location'
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
