import React, { useState } from 'react'
import './CreateBooking.css'
// import { DatePicker } from 'rsuite';
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

function CreateBooking({user, bookings, setBookings,selectedJet}) {

if (!selectedJet) return null;

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
  const [selectedJetName, setSelectedJetName] = useState("");
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
        jet_id:selectedJet.id,
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
            navigate('/bookings/history')
          });
        } else {
          return res.json().then((errors)=>{
            console.log(errors);
            alert("Failed to book.Please try again")
          })
        }
      })

  }
  else {
    alert("Please, select your jet!")
  }
}

console.log("Jet Listings:", selectedJet);




  return (
    <>
    <section className='booking-form'>
    <h2>Reserve your Jet here!</h2>
    <form onSubmit={formHandler} className='booking_form'>
        
        <div className='booking_form_input'>
          
            
            {/* From Location */}
            <div className="input-group">
                <label>From: </label>
                <select className='from-control' name="from" onChange={(e)=>setFrom(e.target.value)} required>
                    <option value="" disabled selected>Select location</option>
                    <option>New York, NY USA</option>
                    <option>Los Angeles, CA USA</option>
                    <option>Chicago, IL USA</option>
                    <option>Houston, TX USA</option>
                    <option>Phoenix, AZ USA</option>
                    <option>Philadelphia, PA USA</option>
                    <option>San Antonio, TX USA</option>
                    <option>San Diego, CA USA</option>
                    <option>Dallas, TX USA</option>
                    <option>San Jose, CA USA</option>
                    <option>Austin, TX USA</option>
                    <option>Jacksonville, FL USA</option>
                    <option>San Francisco, CA USA</option>
                    <option>Columbus, OH USA</option>
                    <option>Charlotte, NC USA</option>
                    <option>Indianapolis, IN USA</option>
                    <option>Seattle, WA USA</option>
                    <option>Denver, CO USA</option>
                    <option>Washington, D.C. USA</option>
                    <option>Boston, MA USA</option>
                    
                    {/* ... other options */}
                </select>
            </div>
            
            {/* To Location */}
            <div className="input-group">
                <label>To: </label>
                <select className='from-control' name="to" onChange={(e)=>setTo(e.target.value)} required>
                    <option value="" disabled selected>Select location</option>
                    <option>New York, NY USA</option>
                    <option>Los Angeles, CA USA</option>
                    <option>Chicago, IL USA</option>
                    <option>Houston, TX USA</option>
                    <option>Phoenix, AZ USA</option>
                    <option>Philadelphia, PA USA</option>
                    <option>San Antonio, TX USA</option>
                    <option>San Diego, CA USA</option>
                    <option>Dallas, TX USA</option>
                    <option>San Jose, CA USA</option>
                    <option>Austin, TX USA</option>
                    <option>Jacksonville, FL USA</option>
                    <option>San Francisco, CA USA</option>
                    <option>Columbus, OH USA</option>
                    <option>Charlotte, NC USA</option>
                    <option>Indianapolis, IN USA</option>
                    <option>Seattle, WA USA</option>
                    <option>Denver, CO USA</option>
                    <option>Washington, D.C. USA</option>
                    <option>Boston, MA USA</option>

                    {/* ... other options */}
                </select>
            </div>
            
            {/* Date Picker */}
            <div className='input-group'>
            <label>Date: </label>
            <DatePicker 
            selected={date} 
            className='from-control' 
            onChange={setDate} 
            dateFormat="MMMM d, yyyy" 
            required 
            />

            </div>
            

            
            {/* Time Picker */}
            <div className='input-group'>
            <label>Time: </label>
            <TimePicker value={time} className='from-control' onChange={setTime} format="hh:mm A" required />
            </div>
            

            {/* Passenger count */}
            <div className="input-group">
                <label>Passenger: </label>
                <select className='from-control' name='total_passenger' onChange={(e)=>setTotal_passenger(e.target.value)} required>
                    <option value="" disabled selected>Select Travelers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    
                </select>
            </div>
            

      <div className="input-group">
            <label>JET:</label>
            <span className='jet-display'>{selectedJet.model}</span>
            {/* Hidden input to store the jet_id */}
            <input type="hidden" name="jet_id" value={selectedJet.id} />
        </div>
            
            {/* Submit Button */}
            <button className='submit' type="submit">SUBMIT</button>
            
        </div>
    </form>
</section>
    </>
  )
  }
  CreateBooking.defaultProps = {
    jets: [],
  };
export default CreateBooking;