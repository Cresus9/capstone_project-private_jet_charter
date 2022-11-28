import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePassenger({user}) {

    const [guests,setGuests]=useState([])
    const [first_name, setFirst_name]=useState("")
    const [last_name, setLast_name]=useState("")
    const [birthdate, setBirthdate]=useState("")
    const [nationality, setNationality]=useState("")
    const [email, setEmail]=useState("")
    const [Phone, setPhone]=useState('')

const navigate= useNavigate();

// console.log(user)





    const formHandler=(e)=>{
        e.preventDefault()
        if (user===user){
          const newBooking ={
            first_name:first_name,
            last_name:last_name,
            birthdate:birthdate,
            Phone:Phone,
            email:email,
            nationality:nationality,
            member_id:user.id
          };
      
        fetch('/passengers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBooking),
        })
          .then((res) => {
            if (res.ok) {
              res.json().then((guests) => {
                setGuests(guests);
              });
            } else {
              res.json().then((errors) => console.log(errors));
            }
          })
          navigate('/guest')
      }
      else {
        alert("Please,login to proceed")
      }
    }
    
    // console.log(passengers)
      return (
        <>
        <h1>Add passenger</h1>
        <section className='booking-form'>
          <h2>Guests</h2>
          <form onSubmit={formHandler} className='signup_form'>
            <label>First Name</label>
            <input
              className='sign'
              type="text"
              name="First_name"
              placeholder="First Name"
              value={first_name}
              onChange={(e)=>setFirst_name(e.target.value)}
            />

            <label>Last Name</label>
            <input
              className='sign'
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={last_name}
              onChange={(e)=>setLast_name(e.target.value)}
            />
            <label>birthdate</label>
            <input
              className='sign'
              placeholder="Birthdate"
              name="birthdate"
              value={birthdate}
              onChange={(e)=>setBirthdate(e.target.value)}
            />

            <label >Email</label>
            <input
              className='sign'
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label >Phone</label>
            <input
              className='sign'
              name="Phone"
              placeholder="Phone"
              value={Phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
            <label >Nationality</label>
            <input
              className='sign'
              placeholder="Nationality"
              name="nationality"
              value={nationality}
              onChange={(e)=>setNationality(e.target.value)}
            />
        
            <button className='signbtn' type="submit">Add</button>
            {/* {errors.map((err) => (
              <error key={err}>{err}</error>
            ))} */}
        </form>
        </section>
        </>
      )
      }