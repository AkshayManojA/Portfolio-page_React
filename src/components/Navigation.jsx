import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar className="justify-content-between p-3 ">
      <Navbar.Brand href="#home">
        <img src="vite.svg" width="30" height="30" alt="Profile logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#mentorship">Mentorship</Nav.Link>
        <Button variant="outline-primary">Say Hello</Button>
        
      </Nav>
    </Navbar>
  );
};

export default Navigation;
