import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureContainer, NavLink } from './FeatureElements';
// import { NavLink } from 'react-router-dom';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Cake of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Link to="/form"><NavLink >Order Now</NavLink></Link>
    </FeatureContainer>
  );
};

export default Feature;
