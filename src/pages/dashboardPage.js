import React, { Component } from "react";
import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";

function DashboardPage() {
  return (
    <div>
      <TheNavBar />
      <Container>
        <h2>Dashboard in page</h2>
      </Container>
    </div>
  );
}

export default DashboardPage;
