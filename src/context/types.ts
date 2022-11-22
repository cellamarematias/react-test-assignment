import { boolean } from "yup";

export type User = {
    name: String;
    avatar: String;
    loggedIn: boolean;
}

export type UserContextType = {
    userContext: Array<User>
    setUserContext: (value: Array<User>) => void
}