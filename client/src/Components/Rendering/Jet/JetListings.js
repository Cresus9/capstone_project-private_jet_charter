import React,{ useEffect,useState } from 'react'
import JetCard from './JetCard'
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

const getList = listings.map((listing)=>
<JetCard key={listing.id} jet={listing}/>)




  return (
    <div className='jet_div'>
      {getList}

    </div>
  )
}
