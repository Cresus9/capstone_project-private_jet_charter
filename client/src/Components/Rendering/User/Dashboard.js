import React,{ useState } from 'react'
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
// import "./styles.css";
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';


export default function Dashboard({handleLogout}) {
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState("1");

    const navigate=useNavigate();

    return (
        <Navbar>
        <Nav>
          <Nav.Item icon={<HomeIcon />} onClick={()=>navigate('/profil')}>Dashboard</Nav.Item>
          <Nav.Item onClick={() =>navigate('/profil')}>New Booking</Nav.Item>
    
          <Nav.Menu title="Profile">
            <Nav.Item onClick={() =>navigate('/guest')}>Guests</Nav.Item>
            <Nav.Item  onClick={()=>navigate('/bookings/history')} >Past</Nav.Item>
            <Nav.Item onClick={()=>navigate('/bookings/history')}>Upcoming</Nav.Item>
            <Nav.Item  onClick={()=>navigate('/profile/update')}>Update Profile</Nav.Item>
          </Nav.Menu>
        </Nav>
        
        <Nav pullRight>
          <Nav.Item onClick={handleLogout} >SignOut</Nav.Item>
        </Nav>
      </Navbar>
    );
  };