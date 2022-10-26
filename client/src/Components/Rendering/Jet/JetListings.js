import React,{ useEffect,useState } from 'react'
import JetCard from './JetCard'
import './JetListings.css'

export default function JetListings({jets}) {
  const [listings, setListings]= useState([])

useEffect(()=>{
    fetch ("/jets")
    .then((res) => {
      if (res.ok) {
        res.json().then((listings) => {
          setListings(listings);
          jets([...listings])
        
        });
      } else {
        res.json().then((errors) => console.log(errors));
      }
    })
}, []);

const getList = listings.map((listing)=>
<JetCard key={listing.id} jet={listing}/>)
// console.log(listings)




  return (
    <>
    <div className='all'>
      <div className='jet-top'>
      <h3>Choose your jet!</h3>

      </div>
      <div className='jet_div'>
        {getList}
      </div>
    </div>
    </>
  )
}
