import React from 'react'
import image1 from '../assets/image/pics/shutterstock_1158453706.jpg'
import image2 from '../assets/image/pics/shutterstock_1928348165.jpg'
import image3 from '../assets/image/pics/pexels-asad-photo-maldives-1430676.jpg'
import './About.css'

export default function About() {
  return (
    <>
    <section className='about'>
      <h3>For your next VIP experience</h3>
      <div className='about_items'>
        <div>
          <img src={image1} alt=''/>
          <h4>Business flights</h4>
          <p>A private jet charter is a form of air travel in which a group of people or a business rents an entire plane instead of individual seats. This type of travel has many advantages over traditional commercial air travel, including greater privacy, flexibility, and convenience. For businesses, a private jet charter can save time and increase productivity by allowing employees to travel directly to their destination without having to deal with the hassle of commercial airports. For vacations, a charter provides a luxurious and comfortable way to travel, with all the amenities of a private plane at your disposal. And for those in the entertainment industry, a charter can be a necessity in order to safely and efficiently transport equipment and personnel to and from locations around the world. Whether you're looking for business or pleasure, a private jet charter is an excellent way to travel.</p>
        </div>
        <div>
          <img src={image2} alt=''/>
          <h4>Entertainment</h4>
          <p>When it comes to entertainment, private jet charter services provide the ultimate in luxury and convenience. Whether you're looking to travel to a concert or sporting event, or simply want to enjoy a night out on the town, private jet charter can get you there in style. With a private jet, you can avoid the hassles of commercial air travel, such as long security lines and baggage claim delays. Plus, you'll be able to relax and enjoy the ride in complete comfort. And if you're traveling with a group of friends or family, private jet charter can be an economical way to travel, since you'll only need to pay for one aircraft. So if you're looking for a truly unique and enjoyable entertainment experience, consider private jet charter.</p>
        </div>
        <div>
          <img src={image3} alt=''/>
          <h4>Glamorous Vacation</h4>
          <p>private jet charter offers a unique and luxurious way to travel. When you book a private jet, you can choose your own itinerary and schedule, which means you can make the most of your time. Whether you're traveling for business or pleasure, a private jet charter is an excellent way to get where you need to go in style. And for those in the entertainment industry, a private jet charter is often the only way to travel. With a private jet, you can avoid the hassles of commercial travel, such as long security lines and delays. So if you're looking for a convenient and luxurious way to travel, consider a private jet charter.</p>
        </div>
      </div>
    </section>
    </>
  )
}
