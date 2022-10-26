import React,{useState} from 'react'

export default function NavItem({icon}) {
const [open, setOpen]=useState(false)


  return (
   <li className='nav-item'>
    <a href='#' className='icon-button' onclick={()=>setOpen(!open)}>
        {icon}

        {/* <li>My Profile </li>
        <li>My Bookings</li>
        <li>Travelers </li> */}
    </a>

   </li>
  )
}
