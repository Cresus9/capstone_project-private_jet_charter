import React,{useState, useEffect} from 'react'
import PassengerCard from './PassengerCard'

export default function Passenger({passengers,setPassengers,user}) {

    

    useEffect(() =>{
        fetch(`/passengers/member/${user.id}`)
        .then((res) => {
          if (res.ok) {
            res.json().then((passengers) => {
              setPassengers(passengers);
            });
          } else {
            res.json().then((errors) => console.log(errors));
          }
        })
    
      }, [])

      console.log(passengers)
    
    
      return (
        <div>
          {passengers.map((passenger) =>
          <PassengerCard key={passenger.id} passenger={passenger} user={user}/>)}
        </div>
      )
}

