import React from "react";

const ActiveUserContext = React.createContext({
  user: null,
  handleLogout: () => {},
  handleLogin: () => {},
});

export default ActiveUserContext;
