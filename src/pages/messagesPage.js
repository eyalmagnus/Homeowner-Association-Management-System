import TheNavBar from "../components/theNavBar";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";
import messageModel from "./shared/messageModel";

function MessagePage() {
  const prevMessages = localStorage.messages ? JSON.parse(localStorage.messages) : []
  const [messagesBillboard, setMessagesBillboard] = useState(prevMessages);
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;

  const handlePost = (title, details, priority, file) => {
    console.log(title, details, priority, file);
    console.log(user.userID);
    // messageModel : (title, details, priority, picture, createdBy, createdAt, comments)
    const now = new Date();
    const newMessage = new messageModel(
      title, details, priority, file, user.userID, now, []
    );
    console.log(newMessage);
    setMessagesBillboard(messagesBillboard.concat(newMessage));
    localStorage.messages = JSON.stringify(messagesBillboard.concat(newMessage));
  };

  if (!activeUser.user) {
    return <Redirect to="/" />;
  }

  const showMessages = () => {
    let messages = [];
    for (let i = 0; i < messagesBillboard.length; i++) {
      const message = messagesBillboard[i];
      const key = "" + i;
      messages.push(
        <Card key={i}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={key}>
              {message.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>{message.details}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
    return messages;
  }

  return (
    <div>
      <TheNavBar iamParent={"messages"} />
      <Container>
        <h2>buildingName Messages Board</h2>
        <NewMessage handlePost={handlePost} />
        <Accordion defaultActiveKey="">
          {showMessages()}
        </Accordion>
        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </Container>

    </div>
  );
}

export default MessagePage;





