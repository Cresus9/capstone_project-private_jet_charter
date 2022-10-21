import React, { useState } from 'react'

export default function InitialBooking({use, bookings, setBookings}) {



  const getJet=(jet)=>{
    // return jet.model
  }

  const form ={
    total_passenger:"",
    date:"",
    time:"",
    from:"",
    to:"",
  }
  const [bookingForm, setBookingForm ]= useState({...form})
  
  const changeHandler=(e)=>{
    const update={
      ...bookings,
      [e.target.name]: e.target.value
    }
    setBookingForm(update)
  }

  const formHandler=(e)=>{
    e.preventDefault()
    if (member && jet){
      const newBooking ={
        ...bookingForm,
        member_id: member_id,
        jet_id: jet_id
      };
  
    fetch('/bookings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((bookings) => {
            setBookings(bookings);
          });
        } else {
          res.json().then((errors) => console.log(errors));
        }
      })
  }
  else {
    alert("Please, select your jet!")
  }
}
  


  return (
    <div>
        <form onSubmit={formHandler} className='booking_form'>
        <span className='booking_form_input'>
          <label> Total Passenger:
            <input 
             required
              type='text'
              name='total_passenger'
              placeholder='Total passenger'
              value={bookingForm.total_passenger}
              onChange={changeHandler}
            />
            </label>
            <label> Date:
            <input
             required
              type='text'
              name='Date'
              placeholder='Date'
              value={bookingForm.date}
              onChange={changeHandler}
            />
            </label>
            <label> Time:
            <input 
              required
              name='time'
              value={bookingForm.time}
              onChange={changeHandler}
            />
            </label>
            <label> From:
            <input
              name='from'
              placeholder='Destination'
              value={bookingForm.from}
              onChange={changeHandler}
            />
            </label>
            <label> To:
            <input
             required
              type='text'
              name='to'
              value={bookingForm.to}
              // onChange={}
            />
            </label>
          <small>Select Jet</small>
					<div >
						Jet: {getJet()}
					</div>
          <button type="submit">Submit</button>
        </span>
      </form>
    </div>
  )
  }