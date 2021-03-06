import React, { createRef, useContext } from "react";
import {
  Navbar,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import ActiveUserContext from "../activeUserContext";
import LogIn from "./LogIn";

function TheNavBar(props) {
  const { iamParent } = props;
  const activeUser = useContext(ActiveUserContext);
  const { user, handleLogin, handleLogout } = activeUser;
  const aRef = createRef();
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
    (iamParent !== "tennants" && user && user.isCM) ? (
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

    <LogIn handleLogin={handleLogin} />
  ) : null;
  const showLogout = user ? (
    <Button
      onClick={handleLogout}
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

      <Navbar.Collapse id="basic-navbar-nav" >
        <div className="ml-2" ref={aRef}> {showNavButtons}</div>
        <Nav className="ml-auto">{showLogout}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavBar;
// Icons made by < a href = "https://www.flaticon.com/authors/becris" title = "Becris" > Becris</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >