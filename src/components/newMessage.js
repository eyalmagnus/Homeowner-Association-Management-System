import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const NewMessage = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("info");
  const [file, setFile] = useState({});
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setDetails("");
    setPriority("info");
    setFile({});
    setValidated(false);
  };
  const handleShow = () => setShow(true);

  const inputRef = useRef();

  const handleFileSelect = (event) => {
    console.log(event.target.files);
    const files = event.target.files;
    if (files.length > 0) {
      setFile(files);
    }
  };

  const handlePost = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      props.handlePost(title, details, priority, file);
      handleClose();
    }
  };

  const fileCooseLabel = file.length > 0 ? file[0].name : "Choose a picture...";

  return (
    <div>
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
          <Modal.Title>New Billboard Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handlePost}>
            <Form.Group controlId="ControlTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="A new ..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ControlDetails">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="3"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please add some details.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ControlpPriority">
              <Form.Label>Priority:</Form.Label>
              <Form.Control
                as="select"
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <option value={"info"}>Info</option>
                <option value={"important"}>IMPORTANT!</option>
              </Form.Control>
            </Form.Group>
            {/* The F I L E INPUT */}
            <Form.File
              multiple
              id="pic-file"
              ref={inputRef}
              label={fileCooseLabel}
              custom
              onChange={handleFileSelect}
            />
            <div className="my-3 d-flex justify-content-end">
              <Button
                className="m-1 mr-2"
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className="my-1" type="submit" variant="primary">
                Post Message
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewMessage;
