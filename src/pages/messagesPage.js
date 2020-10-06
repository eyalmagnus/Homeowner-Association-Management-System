import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { Component, useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";

function MessagePage() {
  const activeUser = useContext(ActiveUserContext);
  const handlePost = (title, detail) => {
    console.log(title, detail);
  };
  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar iamParent={"messages"} />
      <Container>
        <h2>Messages</h2>
        <NewMessage handlePost={handlePost} />
      </Container>
    </div>
  );
}

export default MessagePage;
