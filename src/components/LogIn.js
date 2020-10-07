import React, { Component, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const LogIn = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClose = () => { setShow(false); setEmail(""); setPassword("") };
  const handleShow = () => setShow(true);

  const handleLogClick = () => {
    console.log("LogIn sends:", email, password);
    props.handleLogin(email, password);
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Log in
      </Button>

      <Modal
        animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ControlEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="johndoe@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="ControlPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogClick} >
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogIn;
