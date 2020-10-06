import React, { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import TennantsPage from "./pages/tennantsPage";
import MessagesPage from "./pages/messagesPage";
import VotesPage from "./pages/votesPage";
import IssuesPage from "./pages/issuesPage";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ActiveUserContext from "./activeUserContext";
import userModel from "./pages/shared/userModel";

export default function App() {
  // name, email, apartment, isCM, buildingName, buildingID, userID;
  const demoUser = new userModel(
    "JohnDoe",
    "johny@hom.org.il",
    7,
    true,
    "thePil",
    567,
    1234
  );

  const handleLogin = (logedinUser) => {
    setUser(demoUser);
    console.log(demoUser);
    localStorage.activeUser = JSON.stringify(demoUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
  };
  const [user, setUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null // Changed from null
  );

  const activeUser = {
    user: user,
    handleLogout: handleLogout,
    handleLogin: handleLogin,
  };
  // console.log(activeUser);
  return (
    <div>
      <ActiveUserContext.Provider value={activeUser}>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/tennants">
              <TennantsPage />
            </Route>
            <Route path="/messages">
              <MessagesPage />
            </Route>
            <Route path="/votes">
              <VotesPage />
            </Route>
            <Route path="/issues">
              <IssuesPage />
            </Route>
          </Switch>
        </Router>
      </ActiveUserContext.Provider>
    </div>
  );
}
