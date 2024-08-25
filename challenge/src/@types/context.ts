import { Dispatch, SetStateAction } from "react";
import { User } from "./userData";

export interface VariablesContextType {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
    error: null | any;
    setError: Dispatch<SetStateAction<null | any>>;
    isLoading: boolean;
}

export const defaultValue: VariablesContextType = {
    isLogged: false,
    setIsLogged: () => { },
    users: [],
    setUsers: () => { },
    error: null,
    setError: () => { },
    isLoading: false
};