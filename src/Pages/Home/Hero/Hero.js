import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bike1 from '../../../Images/bike1.jpg'
import bike2 from '../../../Images/bike2.jpg'
import bike3 from '../../../Images/bike3.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div id='banner' className=' rounded h-25 pt-5' >
            <Carousel className=''>
              <Carousel.Item interval={3000}>
                <img 
                  className="d-block w-100"
                  src={bike1}
                  alt="First slide"
                />
                <Carousel.Caption className='mt-3'>
                  <h3>Life is like riding a bicycle</h3>
                  <p>A bicycle ride around the world begins with a single pedal stroke</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={bike2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>It never gets easier, you just go faster</h3>
                  <p>A bicycle ride around the world begins with a single pedal stroke</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src= {bike3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Crashing is part of cycling as crying is part of love</h3>
                  <p>
                  A bicycle ride around the world begins with a single pedal stroke
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
            
          );
        }

export default Hero;