import React, { useState } from 'react'
import './CreateBooking.css'
// import { DatePicker } from 'rsuite';
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

export default function CreateBooking({user, bookings, setBookings,jets}) {

const navigate = useNavigate()
  // console.log(user)
  

  const [total_passenger,setTotal_passenger]=useState('')
  const [time, setTime] = useState('00:00');
  const [to,setTo]=useState('')
  const [from,setFrom]=useState('')
  const [jet_id,setJet_id]=useState('')
  const [member_id,setmember_id]=useState('')
  const [date, setDate] = useState();
  // const handleChange = date => setDate(date);
  // const [startdate,setSartdate]=useState(new Date())
  const [bookedJet, setBookedJet]=useState([])
  const [bookedUser, setBookedUser]=useState([])
  // const [bookingForm, setBookingForm ]= useState(form)
  
  // console.log(date)


  

  const formHandler=(e)=>{
    e.preventDefault()
    if (bookedUser && bookedJet){
      const newBooking ={
        date:date,
        time:time,
        to:to,
        from:from,
        jet_id:jet_id,
        // member_id:member_id,
        total_passenger:total_passenger,

        // ...bookingForm,
        member_id: user.id,
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
      navigate('/bookings/history')
  }
  else {
    alert("Please, select your jet!")
  }
}




  return (
    <>
    <section className='booking-form'>
      <h2>Reserve your Jet here!</h2>
        <form onSubmit={formHandler} className='booking_form'>
          <span className='booking_form_input'>
            <label>From : </label>
                <select className='from-control' name="from" onChange={(e)=>setFrom(e.target.value)} >
                <option value="">Select location</option>
                <option>New York,NY USA</option>
                    <option>Miami,FL USA</option>
                    <option>Los Angeles,CA USA</option>
                    <option>Columbus,OH USA</option>
                    <option>Houston,TX USA</option>
                    <option>Dallas,TX USA</option>
                    <option>Chicago,IL USA</option>
                    <option>Las Vegas,NV USA</option>
                </select>
                  <br/>
              <label className='from-control' >To: </label>

                  <select className='from-control' name="to" onChange={(e)=>setTo(e.target.value)}>
                    <option value="">Select location</option>
                    <option>New York,NY USA</option>
                    <option>Miami,FL USA</option>
                    <option>Los Angeles,CA USA</option>
                    <option>Columbus,OH USA</option>
                    <option>Houston,TX USA</option>
                    <option>Dallas,TX USA</option>
                    <option>Chicago,IL USA</option>
                    <option>Las Vegas,NV USA</option>
                  </select>
                <br/>
                <label >Date:</label>
                <DatePicker selected={date} 
                className={'from-date'}
                onChange={(date)=>setDate(date)} />
                <br/>
                <label >Time:</label>
                <TimePicker
                value={time}
                className={'from-control'}
                onChange={(time)=>setTime(time)}  />
                
                <br/>

              <label > Passenger:
                <select className='from-control' name='total_passenger' onChange={(e)=>setTotal_passenger(e.target.value)}>
                    <option value={total_passenger}>Select Travelers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>
   
                </label>
                <br/>
                <label >Select jet:</label>
                  <select className='from-control' name="jet_id" onChange={(e)=>setJet_id(e.target.value)}>
                    <option >Select jet</option>
                    <option key={jets[0].id} value= {jets[0].id} >{jets[0].model}</option>
                    <option key={jets[1].id} value= {jets[1].id}>{jets[1].model}</option>
                    <option key={jets[2].id} value= {jets[2].id}>{jets[2].model}</option>
                  </select>
                  <br/>
              <button className='submit' type="submit">SUBMIT</button>
          </span>
        </form>
    </section>
    </>
  )
  }