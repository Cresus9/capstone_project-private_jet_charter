import React from 'react'
// import './UserBookingCard.css'

export default function UserBookingCard({booking}) {
  return (
    <div>
        <h3>Flight Info:</h3>
        <p>Type ~ One Way</p>
        <span>
           <p><strong>Total Passenger:{booking.total_passenger}</strong></p>
        </span>
        <span>
            <p>From:{booking.from}</p>
            <p>Date:{booking.date}</p>
            <p>Time:{booking.time}</p>
        </span>
        <span>
            <p>To:{booking.to}</p>
        </span>
    </div>
  )
}
