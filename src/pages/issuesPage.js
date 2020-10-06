import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { Component, useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function IssuesPage() {
  const activeUser = useContext(ActiveUserContext);
  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar />
      <Container>
        <h2>Issues page</h2>{" "}
      </Container>
    </div>
  );
}

export default IssuesPage;
