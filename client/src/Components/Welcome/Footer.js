import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
   <footer className='footer'>
    <div className="footer-main">
        <ul>
            <li><button>Book A Jet</button></li>
            <li><button>About Us</button></li>
        </ul>
        <div className="footer-address">
            <h4>Jetsetter Co.</h4>
            <p>123 Flight Lane</p>
            <p>New York, NY 10001</p>
            <p>(123) 456-7890</p>
            <p>contact@jetsetter.com</p>
        </div>
        <ul>
            <li><button>GitHub</button></li>
            <li><button>LinkedIn</button></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2023 Jetsetter Co. All rights reserved.</p>
    </div>
   </footer>
  )
}
