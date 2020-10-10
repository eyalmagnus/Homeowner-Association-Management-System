import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import TennantsPage from "./pages/tennantsPage";
import MessagesPage from "./pages/messagesPage";
import VotesPage from "./pages/votesPage";
import IssuesPage from "./pages/issuesPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ActiveUserContext from "./activeUserContext";
import userModel from "./pages/shared/userModel";

export default function App() {
  // name, email, apartment, isCM, buildingName, buildingID, userID;
  const demoUser1 = new userModel(
    "JohnDoe",
    "johny@email.com",
    7,
    true,
    "Pil tower",
    567,
    1234
  );
  const demoUser2 = new userModel(
    "SaraDoe",
    "sara@email.com",
    8,
    false,
    "Pil tower",
    567,
    1235
  );
  const demoUsers = [{ user: demoUser1, password: 1234 }, { user: demoUser2, password: 1234 }]

  const handleLogin = (email, password) => {
    for (let i = 0; i < demoUsers.length; i++) {
      if (demoUsers[i].user.email == email && demoUsers[i].password == password) {
        setUser(demoUsers[i].user);
        localStorage.activeUser = JSON.stringify(demoUsers[i].user);
        return true;
      };
    };
    return false;

  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
  };
  const prevUser = localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null
  const [user, setUser] = useState(prevUser);

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
