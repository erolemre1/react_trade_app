import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  
} from 'reactstrap';
import CardSummary from '../CardSummary';


const Navi = ({cart}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand href="/">Trade</NavbarBrand>
          <NavbarToggler onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
       <CardSummary cart = {cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;