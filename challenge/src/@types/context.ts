import { Dispatch, SetStateAction } from "react";
import { User } from "./userData";

export interface VariablesContextType {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
}

export const defaultValue: VariablesContextType = {
    isLogged: false,
    setIsLogged: () => { },
    users: [],
    setUsers: () => { }
};