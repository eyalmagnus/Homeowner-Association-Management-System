import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import edit from "../images/edit.svg"

const EditMessage = (props) => {


  const inputRef = useRef();

  const { handleEdit, messageN: replacing, message } = props;
  const { title: titleS, details: detailsS, priority: priorityS, picture } = message;

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(titleS);
  const [details, setDetails] = useState(detailsS);
  const [priority, setPriority] = useState(priorityS);
  const [file, setFile] = useState(picture);
  const [validated, setValidated] = useState(false);
  
  const handleClose = () => { setShow(false);  setValidated(false); };
  const handleShow = () => {
    const confirmEdit = window.confirm("EDIT MESSAGE! Are you sure? \n This action will create a new updated message and delete the old one.");
    if (confirmEdit){setShow(true)} }


  const handleFileSelect = (event) => {
    console.log(event.target.files);
    const files = event.target.files;
    if (files.length > 0) { setFile(files) }
  };

  const handleRepost = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      handleEdit(title, details, priority, file, replacing);
      handleClose();
    }
  };

  const fileCooseLabel = (file.length > 0) ? file[0].name : "Choose a picture..."
  
  return (
    <div >
      <img alt="edit" src={edit} onClick={handleShow} />

      <Modal
        animation={false}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Billboard Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleRepost}>
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
              <Form.Control as="select" value={priorityS} onChange={(e) => {
                setPriority(e.target.value);
              }}>
                <option value={"info"}>Info</option>
                <option value={"important"}>IMPORTANT!</option>
              </Form.Control>
            </Form.Group>
            {/* The F I L E INPUT */}
            <Form.File multiple id="pic-file" ref={inputRef} label={fileCooseLabel} custom onChange={handleFileSelect} />
            <div className="my-3 d-flex justify-content-end">
              <Button className="m-1 mr-2" variant="secondary" onClick={handleClose}>
                Cancel
          </Button>
              <Button className="my-1" type="submit" variant="primary" >
                Repost Message
          </Button>
            </div>
          </Form>

        </Modal.Body>

      </Modal>
    </div>
  );
};

export default EditMessage;
