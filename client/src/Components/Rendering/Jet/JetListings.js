import React,{ useEffect,useState } from 'react'
import JetCard from './Components/Rendering/Jet/JetCard'
import './JetListings.css'

export default function JetListings() {
  const [listings, setListings]= useState([])

useEffect(()=>{
    fetch ("/jets")
    .then((res) => {
      if (res.ok) {
        res.json().then((listings) => {
          setListings(listings);
        });
      } else {
        res.json().then((errors) => console.log(errors));
      }
    })
}, []);

console.log(listings)



  return (
    <div>
      {listings.map((listing)=>
      <JetCard key={listing.id} jet={listing}/>)}

    </div>
  )
}
