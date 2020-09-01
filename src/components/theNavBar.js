import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./theNavBar.css";

function TheNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">HOM Systems</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/#/tennants">Tennants</Nav.Link>
          <Nav.Link href="/#/messages">Messages</Nav.Link>
          <Nav.Link href="/#/issues">Issues</Nav.Link>
          <Nav.Link href="/#/votes">Voting</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">LogIn</Nav.Link>
          <Nav.Link href="#">LogOut</Nav.Link>
          <Nav.Link href="#">SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavBar;
