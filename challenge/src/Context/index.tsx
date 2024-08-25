import { VariablesContextType, defaultValue } from "@/@types/context";
import { User } from "@/@types/userData";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const ParamsContext = ({ children }: { children: ReactNode }) => {

    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);

    const router = useRouter(); 

    useEffect(() => {
        const checkLogin = localStorage.getItem("isLoggedIn")
        if (!checkLogin) {
          router.push("/login");
        } else {
            setIsLogged(true);
        };
      }, [isLogged]);

    return (
        <ParamsProvider.Provider
            value={{
                isLogged,
                setIsLogged,
                users,
                setUsers
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextGlobal = () => useContext(ParamsProvider);
export default ParamsContext;
