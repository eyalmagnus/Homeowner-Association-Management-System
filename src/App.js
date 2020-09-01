import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import TennantsPage from "./pages/tennantsPage";
import MessagesPage from "./pages/messagesPage";
import VotesPage from "./pages/votesPage";
import IssuesPage from "./pages/issuesPage";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import TheNavBar from "./components/theNavBar";

export default function App() {
  return (
    <div>
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
    </div>
  );
}
