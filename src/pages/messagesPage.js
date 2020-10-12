import TheNavBar from "../components/theNavBar";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import React, { useContext, useState } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";
import messageModel from "./shared/messageModel";
import trashCan from "../images/trash-can.svg";
import important from "../images/important.svg";
import info from "../images/info.svg";
import EditMessage from "../components/EditMessage";

function MessagePage() {
  const prevMessages = localStorage.messages
    ? JSON.parse(localStorage.messages)
    : [];
  const [messagesBillboard, setMessagesBillboard] = useState(prevMessages);
  const activeUser = useContext(ActiveUserContext);
  const { user } = activeUser;
  const [filterBy, setFilterBy] = useState();

  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  const { isCM, buildingName, userID } = user;

  // messageModel : (title, details, priority, picture, createdBy, createdAt, comments, readBy)

  const handlePost = (title, details, priority, file) => {
    const now = new Date();
    const newMessage = new messageModel(
      title,
      details,
      priority,
      file,
      userID,
      now,
      [],
      []
    );
    setMessagesBillboard(messagesBillboard.concat(newMessage));
    localStorage.messages = JSON.stringify(
      messagesBillboard.concat(newMessage)
    );
  };

  const handleTrashClick = (value) => {
    const confirmDelete = window.confirm(
      "DELETE MESSAGE! Are you sure? \n This action cannot be undone!"
    );
    if (confirmDelete) {
      const messagesC = messagesBillboard.slice();
      messagesC.splice(value, 1);
      setMessagesBillboard(messagesC);
      localStorage.messages = JSON.stringify(messagesC);
    }
  };

  const handleEditMessage = (title, details, priority, file, replacing) => {
    const newDetail = details.concat(
      ` - updated "${messagesBillboard[replacing].title}"`
    );
    const now = new Date();
    const messagesC = messagesBillboard.slice();
    const newMessage = new messageModel(
      title,
      newDetail,
      priority,
      file,
      userID,
      now,
      [],
      []
    );
    messagesC.splice(replacing, 1);
    setMessagesBillboard(messagesC.concat(newMessage));
    localStorage.messages = JSON.stringify(messagesC.concat(newMessage));
  };

  const handleSortChange = (value) => {
    console.log(value);
    switch (value) {
      case "date":
        dateSort();
        break;
      case "priority":
        prioritySort();
        break;
    }
  };

  const dateSort = () => {
    let messages = messagesBillboard.slice();
    messages.sort(function (a, b) {
      var x = a.createdAt;
      var y = b.createdAt;
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setMessagesBillboard(messages);
  };

  const prioritySort = () => {
    let messages = messagesBillboard.slice();
    messages.sort(function (a, b) {
      var x = a.priority;
      var y = b.priority;
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setMessagesBillboard(messages);
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilterBy(event.target.value);

    //   let actorCards = [];
    //   for (let i = 0; i < actors.length; i++) {
    //     let fnameC = actors[i].fname.toUpperCase();
    //     let lnameC = actors[i].lname.toUpperCase();
    //     let filterC = filtering.toUpperCase();
    //     if (fnameC.indexOf(filterC) > -1 || lnameC.indexOf(filterC) > -1) {
    //       actorCards.push(
    //         <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
    //           <ActorCard actor={actors[i]} />
    //         </Col>
    //       );
    //     }
    //   }

    //   return actorCards;
    // }
  };

  const showMessages = () => {
    let messages = [];
    for (let i = 0; i < messagesBillboard.length; i++) {
      const message = messagesBillboard[i];
      const showIcon = message.priority === "info" ? info : important;
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
            <Card.Body>
              <Row>
                <Col xs="12">{message.details}</Col>
                {isCM ? (
                  <div>
                    <Row>
                      <Col xs="6">
                        <img
                          alt="trash"
                          src={trashCan}
                          onClick={() => handleTrashClick(i)}
                        />
                      </Col>
                      <Col xs="6">
                        <EditMessage
                          handleEdit={handleEditMessage}
                          messageN={i}
                          message={message}
                        />
                      </Col>
                    </Row>
                  </div>
                ) : null}
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
    return messages;
  };

  console.log(messagesBillboard);

  return (
    <div>
      <TheNavBar iamParent={"messages"} />
      <Container>
        <h3>{buildingName} - Billboard</h3>

        <Form>
          <Form.Group as={Row}>
            <Col>
              <Form.Label className="mr-2">Sort by: </Form.Label>

              <Form.Check
                onChange={() => handleSortChange("date")}
                inline
                defaultChecked
                type="radio"
                label="Date"
                name="Radios"
                id="Radios1"
              />
              <Form.Check
                onChange={() => handleSortChange("priority")}
                inline
                type="radio"
                label="Priority"
                name="Radios"
                id="Radios2"
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="filter">
            <Form.Label>Filter</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter to filter"
              value={filterBy}
              onChange={handleFilter}
            />
            <Form.Text className="text-muted">
              Enter text to search in messages titles and details.
            </Form.Text>
          </Form.Group>
        </Form>

        <NewMessage handlePost={handlePost} />
        <Accordion defaultActiveKey="">{showMessages()}</Accordion>
      </Container>
    </div>
  );
}

export default MessagePage;
