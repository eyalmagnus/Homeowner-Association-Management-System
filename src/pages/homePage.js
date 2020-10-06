import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TheNavBar from "../components/theNavBar";
import { propTypes } from "react-bootstrap/esm/Image";

function HomePage(props) {
  return (
    <div>
      <TheNavBar />
      <Container>
        <h2> Home Page</h2>
      </Container>
    </div>
  );
}

export default HomePage;
