import { createContext, ReactNode, useState } from "react";
import { User } from "./types";

const UserContext = createContext({});

interface Props {
    children: ReactNode;
}

export function UserContextProvider({ children }: Props) {
    const [ userContext, setUserContext ] = useState<Array<User>>([]);
    return (
    <UserContext.Provider value={{userContext, setUserContext}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContext;