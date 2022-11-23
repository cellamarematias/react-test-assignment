import React, { useContext, useEffect, useState } from "react";
import { UserContextType } from "./context/types";
import UserContext, { UserContextProvider } from "./context/user";

// screens
import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";

function App() {
  const { userContext, setUserContext } = useContext(UserContext) as UserContextType;

  return (
    userContext.length > 0 ? <Profile></Profile> : <Login></Login>
  )
};

export default App;
