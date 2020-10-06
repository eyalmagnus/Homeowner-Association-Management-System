import React, { Component, useContext } from "react";
import { Container } from "react-bootstrap";
import TheNavBar from "../components/theNavBar";
import { propTypes } from "react-bootstrap/esm/Image";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function HomePage(props) {
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <TheNavBar iamParent={"home"} />
      <Container>
        <h2> Home Page</h2>
      </Container>
    </div>
  );
}

export default HomePage;
