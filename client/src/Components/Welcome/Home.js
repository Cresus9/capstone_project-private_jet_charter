import React from 'react'
import './Home.css'
import JetCard from '../Rendering/Jet/JetCard'
import InitialBooking from '../Rendering/User/CreateBooking'

export default function Home({onLogout}, {onLogin}) {
  return (
    <div>
        <h1>Home</h1>


        <JetCard />
        <InitialBooking />
      
    </div>
  )
}
