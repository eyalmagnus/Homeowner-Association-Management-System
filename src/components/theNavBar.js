import React, { Component, useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./theNavBar.css";
import ActiveUserContext from "../activeUserContext";

function TheNavBar() {
  const activeUser = useContext(ActiveUserContext);
  console.log(activeUser);
  const { user, handleLogin, handleLogout } = activeUser;
  const showTennants = user ? (
    <Nav.Link href="/#/tennants">Tennants</Nav.Link>
  ) : null;
  const showNavButtons = user ? (
    <Nav className="mr-auto">
      <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/#/messages">Messages</Nav.Link>
      <Nav.Link href="/#/issues">Issues</Nav.Link>
      <Nav.Link href="/#/votes">Voting</Nav.Link>
      {showTennants}
    </Nav>
  ) : null;

  const showLogin = !user ? (
    <div>
      <Button
        onClick={() => handleLogin()}
        className="navButtons"
        variant="outline-success"
      >
        LogIn
      </Button>
      <Button className="navButtons" variant="outline-primary">
        SignUp{" "}
      </Button>
    </div>
  ) : (
    <Button
      onClick={() => handleLogout()}
      className="navButtons"
      variant="outline-danger"
    >
      LogOut
    </Button>
  );
  // const showLogout = user ? (
  //   <Button className="navButtons" variant="outline-danger">
  //     LogOut
  //   </Button>
  // ) : null;

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">HOM Systems</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {showNavButtons}
        <Nav className="ml-auto">{showLogin}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavBar;
