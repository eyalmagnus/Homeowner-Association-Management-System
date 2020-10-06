import React, { Component, useContext } from "react";
import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import ActiveUserContext from "../activeUserContext";

function DashboardPage(props) {
  const activeUser = useContext(ActiveUserContext);

  // if (!activeUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <TheNavBar />
      <Container>
        <h2>Dashboard in page</h2>
        <div>Active User:</div>
      </Container>
    </div>
  );
}

export default DashboardPage;
