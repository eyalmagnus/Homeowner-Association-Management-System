import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { Component, useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function VotesPage() {
  const activeUser = useContext(ActiveUserContext);
  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar iamParent={"votes"} />
      <Container>
        <h2>Voting page</h2>
      </Container>
    </div>
  );
}

export default VotesPage;
