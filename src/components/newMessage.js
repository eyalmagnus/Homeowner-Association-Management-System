import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const NewMessage = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("info");
  // const [file, setFile] = useState("");
  const handleClose = () => { setShow(false); setTitle(""); setDetails(""); setPriority("info") };
  const handleShow = () => setShow(true);


  const handlePost = () => {
    props.handlePost(title, details, priority);
    handleClose();
  };

  return (
    <div >
      <Button variant="link" onClick={handleShow}>
        + New Message
      </Button>

      <Modal
        animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ControlTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="A new ..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="ControlDetails">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="ControlpPriority">
              <Form.Label>Priority:</Form.Label>
              <Form.Control as="select" value={priority} onChange={(e) => {
                setPriority(e.target.value);
              }}>
                <option value={"info"}>Info</option>
                <option value={"important"}>Important!</option>
              </Form.Control>
            </Form.Group>
            <Form.File id="pic-file" label="Choose a picture.." custom />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Post Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewMessage;
