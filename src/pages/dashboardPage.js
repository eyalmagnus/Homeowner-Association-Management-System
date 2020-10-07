import React, { useContext } from "react";
import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function DashboardPage(props) {
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <TheNavBar iamParent={"dashboard"} />
      <Container>
        <h2>Dashboard in page</h2>
        <div>Hello {user.name}</div>
      </Container>
    </div>
  );
}

export default DashboardPage;
