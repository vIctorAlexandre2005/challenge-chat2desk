import { VariablesContextType, defaultValue } from "@/@types/context";
import { User } from "@/@types/userData";
import { Loader } from "@/Components/Loader";
import { getListContacts } from "@/services";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const ParamsContext = ({ children }: { children: ReactNode }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const { 
        data: users = [], 
        error, 
        isError, 
        isLoading 
    } = useQuery<User[]>('users', getListContacts);

    const router = useRouter();

    useEffect(() => {
        const checkLogin = localStorage.getItem("isLogged")
        if (!checkLogin) {
            router.push("/login");
        } else {
            setIsLogged(true);
        };
    }, []);

    if (isLoading) {
        return <Loader />
    };

    return (
        <ParamsProvider.Provider
            value={{
                isLogged,
                setIsLogged,
                users,
                error: isError,
                setError: () => null,
                isLoading,
                setUsers: () => { },
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextGlobal = () => useContext(ParamsProvider);
export default ParamsContext;
