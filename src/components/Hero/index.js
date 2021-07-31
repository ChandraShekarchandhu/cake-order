import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Tastiest Cakes Ever</HeroH1>
          <HeroP>Ready in 15 minutes</HeroP>
          
         <Link to="/orderForm"><HeroBtn>Place Order</HeroBtn></Link> 
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;


