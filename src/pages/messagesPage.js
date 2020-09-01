import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { Component } from "react";

function MessagePage() {
  return (
    <div>
      <TheNavBar />
      <Container>
        <h2>Messages page</h2>
      </Container>
    </div>
  );
}

export default MessagePage;
