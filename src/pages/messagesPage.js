import TheNavBar from "../components/theNavBar";
import { Accordion, Badge, Button, Card, Container, Image } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";
import messageModel from "./shared/messageModel";
import trashCan from "../images/trash-can.svg"
import important from "../images/important.svg"
import info from "../images/info.svg"

function MessagePage() {
  const prevMessages = localStorage.messages ? JSON.parse(localStorage.messages) : []
  const [messagesBillboard, setMessagesBillboard] = useState(prevMessages);
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;

  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  const { name, email, apartment, isCM, buildingName, buildingID, userID } = user;
  const handlePost = (title, details, priority, file) => {
    console.log(title, details, priority, file);
    console.log(user.userID);
    // messageModel : (title, details, priority, picture, createdBy, createdAt, comments)
    const now = new Date();
    const newMessage = new messageModel(
      title, details, priority, file, userID, now, []
    );
    console.log(newMessage);
    setMessagesBillboard(messagesBillboard.concat(newMessage));
    localStorage.messages = JSON.stringify(messagesBillboard.concat(newMessage));
  };


  const handleTrashClick = (value) => {
    console.log("click", value);
    const confirmDelete = window.confirm("DELETE MESSAGE! Are you sure? \n This action cannot be undone!");
    if (confirmDelete) {
      const messagesC = messagesBillboard.slice();
      messagesC.splice(value, 1);
      setMessagesBillboard(messagesC);
    }
  }



  const showMessages = () => {
    let messages = [];
    for (let i = 0; i < messagesBillboard.length; i++) {
      const message = messagesBillboard[i];
      const showIcon = (message.priority === "info") ? info : important
      const key = "" + i;
      messages.push(
        <Card key={i}>
          <Card.Header className="d-flex justify-content-between">
            <Accordion.Toggle as={Button} variant="light" eventKey={key}>
              {message.title}

            </Accordion.Toggle>
            <img alt="priority icon" src={showIcon} />

          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>{message.details}
              <br />
              {isCM ? <img alt="trash" src={trashCan} onClick={() => handleTrashClick(i)} /> : null}
            </Card.Body>
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
        <h3>{buildingName} - Billboard</h3>
        <NewMessage handlePost={handlePost} />
        <Accordion defaultActiveKey="">
          {showMessages()}
        </Accordion>

      </Container>

    </div>
  );
}

export default MessagePage;





