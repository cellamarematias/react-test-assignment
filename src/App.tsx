import { createContext, useState } from 'react'

// screens
import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";

export const LoginContext = createContext({ loggedIn: false, setLoggedIn: (loggedIn: false) => { } })

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  
    return (
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? <Profile></Profile> : <Login></Login>}
      </LoginContext.Provider>
    )
}

export default App;
