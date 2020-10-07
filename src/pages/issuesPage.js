import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";

function IssuesPage() {
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar iamParent={"issues"} />
      <Container>
        <h2>Issues page</h2>
        <div>Hello {user.name}</div>
      </Container>
    </div>
  );
}

export default IssuesPage;
