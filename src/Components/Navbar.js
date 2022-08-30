import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/news' activeStyle>
            News
          </NavLink>
          <NavLink to='/history' activeStyle>
            History
          </NavLink>
          <NavLink to='/report' activeStyle>
            Report Event
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;