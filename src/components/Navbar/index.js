import React from 'react';
import { Nav, NavLink, NavIcon} from './NavbarElements';



const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Cake</NavLink>
      
        <NavIcon onClick={toggle}>
          
          <p>Menu</p>
          {/* <Bars /> */}
          
        </NavIcon>
        
      </Nav>

    </>
  );
};

export default Navbar;
