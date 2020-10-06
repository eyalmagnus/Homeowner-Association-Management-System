import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { Component, useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function TennantsPage() {
  const activeUser = useContext(ActiveUserContext);
  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar />
      <Container>
        <h2>Menage Tennats page</h2>
      </Container>
    </div>
  );
}

export default TennantsPage;
