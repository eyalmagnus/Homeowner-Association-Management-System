import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";
import LogIn from "../components/LogIn";

function MessagePage() {
  const activeUser = useContext(ActiveUserContext);
  const handlePost = (title, detail, priority) => {
    console.log(title, detail, priority);
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
