import React, { useState } from 'react'

export default function InitialBooking({jet,user, bookings, setBookings}) {



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
  const [bookingForm, setBookingForm ]= useState(form)
  
  const changeHandler=(e)=>{
    const update={
      ...bookingForm,
      [e.target.name]: e.target.value
    }
    setBookingForm(update)
  }

  const formHandler=(e)=>{
    e.preventDefault()
    if (user && jet){
      const newBooking ={
        ...bookingForm,
        user_id: user_id,
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
          res.json().then((booking) => {
            setBookings(booking);
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
              onChange={changeHandler}
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