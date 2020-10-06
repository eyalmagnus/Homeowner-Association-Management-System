import React, { Component, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const NewMessage = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("");
  const [file, setFile] = useState("");
  const { callPost } = props.handlePost;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePost = () => {
    callPost(title, details);
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        + New Message
      </Button>

      <Modal
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
            <Form.Group controlId="exampleForm.ControlInput1">
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
            <Form.Group controlId="exampleForm.ControlTextarea1">
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
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Priority:</Form.Label>
              <Form.Control as="select">
                <option>Info</option>
                <option>Important!</option>
              </Form.Control>
            </Form.Group>
            <Form.File id="custom-file" label="Choose a picture.." custom />
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
    </>
  );
};

export default NewMessage;
