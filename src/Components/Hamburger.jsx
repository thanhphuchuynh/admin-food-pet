import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from './Animations';

import dallas from '../images/dallas.webp';
import dallasVideo from '../images/Puppy.mp4';
import catVideo from '../images/Cat.mp4';
import dog3 from '../images/Dog3.mp4';
import austin from '../images/austin.webp';
import pet2 from '../images/pet2.jpg';
import pet4 from '../images/pet4.jpg';
import newyork from '../images/newyork.webp';
import sanfrancisco from '../images/sanfrancisco.webp';
import beijing from '../images/beijing.webp';
import { useState } from 'react';

const cities = [
  { name: 'Funny', image: dallas, video: dallasVideo },
  { name: 'Beauty', image: pet2 },
  { name: 'Foody', image: newyork, video: dog3 },
  { name: 'Care', image: pet4 },
  { name: 'healthy', image: beijing, video: catVideo },
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);
  const VideoElement = () => {
    return isVideo ? (
      <div className="imgbotstrapqulai">
        <video autoPlay muted loop className="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    ) : (
      <></>
    );
  };
  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div ref={(el) => (reveal1 = el)} className="menu-secondary-background-color"></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div ref={(el) => (cityBackground = el)} className="menu-city-background">
          <VideoElement />
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutions">
                      Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Services</h3>
                <p>
                  Food Pet® offers a full range of products for dogs and cats: food, sanitary sand,
                  toilet trays, bonus cakes, toys, accessories ... National delivery, free ...
                </p>
              </div>
              <div className="locations">
                About us:
                {/* Returning the list of cities */}
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => {
                      handleCity(el.image, cityBackground, el.video);
                      if (el.video) {
                        setIsVideo(true);
                        setVideo(el.video);
                      } else {
                        setIsVideo(false);
                      }
                    }}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
