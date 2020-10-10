import TheNavBar from "../components/theNavBar";
import { Container } from "react-bootstrap";
import React, { useContext } from "react";
import ActiveUserContext from "../activeUserContext";
import { Redirect } from "react-router-dom";
import NewMessage from "../components/newMessage";
import LogIn from "../components/LogIn";
import FormTester from "./shared/FormTester";
import FileInput from "../components/FileInput";

function MessagePage() {
  const activeUser = useContext(ActiveUserContext);
  const handlePost = (title, detail, priority, file) => {
    console.log(title, detail, priority, file);
    console.log(file[0].name);
    // create new message and save it
    // messageModel : (title, details, priority, picture, createdBy, createdAt, comments)



  };

  if (!activeUser.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <TheNavBar iamParent={"messages"} />
      <Container>
        <h2>buildingName Messages Board</h2>
        <NewMessage handlePost={handlePost} />
        <FileInput value={""}
        />
      </Container>

    </div>
  );
}

export default MessagePage;
