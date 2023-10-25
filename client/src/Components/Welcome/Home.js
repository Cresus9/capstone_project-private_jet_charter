import React from 'react'
import './Home.css'
import CreateBooking from '../Rendering/User/CreateBooking'
import image1 from '../assets/image/pics/shutterstock_1158453706.jpg'
import image2 from '../assets/image/pics/shutterstock_1928348165.jpg'
import image3 from '../assets/image/pics/pexels-asad-photo-maldives-1430676.jpg'
import image4 from '../assets/image/pics/Screen Shot 2022-10-24 at 9.54.26 PM.png'
import image5 from '../assets/image/pics/Screen Shot 2022-10-24 at 9.55.32 PM.png'
import image6 from '../assets/image/pics/Screen Shot 2022-10-24 at 9.56.49 PM.png'
// import NavBar from './NavBar'
import './Home.css'
import About from './About'
import JetListings from '../Rendering/Jet/JetListings'
// import video from '../assets/video/1046392675-hd.mov'
import video from '../assets/video/1046392675-sd.mov'
import { useNavigate } from 'react-router-dom'



export default function Home({onLogout, onLogin}) {
	
	
	
	return(
		<>
			<section className='alert-section'>
			<p>Traveling internationally? Stay updated with <a href="#your-link-here">COVID-19 travel guidance and restrictions</a>.</p>
			</section>
			<div className='home'>
  			<video className='video' src={video} autoPlay loop muted />
  			<div className='overlay'>
    			<h1>Travel Beyond Ordinary</h1>
    			<p>Discover a world of luxury and exclusivity with our private jet charter services. Say goodbye to crowded commercial flights and elevate your travel experiences.</p>
    			<button className='book-now-btn' >Book Now & Embark on a Journey Like Never Before</button>
  			</div>
			</div>

			<section className='about'>
    <h3>Rediscover Luxury Travel with Us</h3>
    
    <About />

	<div className="banner">
    <div className="banner-content">
        <h2>Unlock the Ultimate Flight Experience</h2>
    </div>
</div>

    

</section>


		
		</>
	)}
