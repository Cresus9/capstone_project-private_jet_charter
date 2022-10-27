import React from 'react'
import { Carousel } from "react-responsive-carousel";
import image1 from '../assets/image/pics/pexels-ian-turnell-709552.jpg'
import image3 from '../assets/image/pics/shutterstock_747646759.jpg'
import image4 from '../assets/image/pics/shutterstock_747646759.jpg'
import image5 from '../assets/image/pics/shutterstock_747646759.jpg'




export default function CarouselCard() {

  return (
    <Carousel autoPlay>
    <div>
      <img alt="" src={image1} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={image3} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={image4} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src={image5} />
      <p className="legend">Legend 4</p>
    </div>
    {/* <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div> */}
  </Carousel>
  )
}
