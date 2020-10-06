import React, { Component, useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import ActiveUserContext from "../activeUserContext";

function TheNavBar(props) {
  const { iamParent } = props;
  const activeUser = useContext(ActiveUserContext);
  // console.log(activeUser);
  const { user, handleLogin, handleLogout } = activeUser;

  const showDashboard =
    iamParent !== "dashboard" ? (
      <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
    ) : null;

  const showMessages =
    iamParent !== "messages" ? (
      <Nav.Link href="/#/messages">Messages</Nav.Link>
    ) : null;

  const showIssues =
    iamParent !== "issues" ? (
      <Nav.Link href="/#/issues">Issues</Nav.Link>
    ) : null;

  const showVoting =
    iamParent !== "votes" ? <Nav.Link href="/#/votes">Voting</Nav.Link> : null;

  const showTennants =
    iamParent !== "tennants" ? (
      <Nav.Link href="/#/tennants">Tennants</Nav.Link>
    ) : null;
  const showNavButtons = user ? (
    <Nav className="mr-auto">
      {showDashboard}
      {showMessages}
      {showIssues}
      {showVoting}
      {showTennants}
    </Nav>
  ) : (
    "Log in to gain access.."
  );

  const showLogin = !user ? (
    <Button
      onClick={() => handleLogin()}
      className="m-1"
      variant="outline-success"
    >
      LogIn
    </Button>
  ) : null;
  const showLogout = user ? (
    <Button
      onClick={() => handleLogout()}
      className="m-1"
      variant="outline-danger"
    >
      LogOut
    </Button>
  ) : null;

  const showUser = user ? (
    <Badge pill variant="light">
      Signed in as: {user.name}
    </Badge>
  ) : null;

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">HOM Systems</Navbar.Brand>
      {showLogin}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {showUser}

      <Navbar.Collapse id="basic-navbar-nav">
        <div> {showNavButtons}</div>
        <Nav className="ml-auto">{showLogout}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavBar;
