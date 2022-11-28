import React,{ useEffect} from 'react'
import UserBookingHistoryCard from './UserBookingHistoryCard';

export default function UserBookingHistory({ user,bookings,setBookings }) {
  
    useEffect(() =>{
        fetch(`/bookings/member/${user.id}`)
        .then((res) => {
          if (res.ok) {
            res.json().then((bookings) => {
              setBookings(bookings);
            });
          } else {
            res.json().then((errors) => console.log(errors));
          }
        })
    
      }, [])
      console.log(bookings)
    
    
      return (
        <div>
          {bookings.map((booking) =>
          <UserBookingHistoryCard key={booking.id} booking={booking} user={user}/>)}
        </div>
      )
}
