import { createContext, ReactNode, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { api } from "../../services";
import { ILoginRequestData, ILoginResponse } from "../../services/auth/types";
import { AuthContextType, IAccessToken } from "./types";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const routes = useNavigate();
    
    const [accessToken, setAccessToken] = useLocalStorage<
        IAccessToken | undefined
    >('@ngCash/access_token');

    const loginMutation = useMutation(
        (login: ILoginRequestData) => {
            return api.auth.login(login);
        }, {
            onSuccess: ({ data }: {data: ILoginResponse}) => {
                setAccessToken({ access_token: data.access_token });
                routes('/dashboard');
            },
            onError: (error: any) => {
                console.log(error.response.data.message);
            }   
        }
    );
    
    const login = (login: ILoginRequestData) => {
        loginMutation.mutate(login);
    }

    const logout = () => {
        setAccessToken(undefined);
        routes('/login');        
    };

    const contextValue: AuthContextType = useMemo(
        () => ({
        accessToken,
        login,
        logout,
        setAccessToken
        }),
        [
            accessToken,
            login,
            logout,
            setAccessToken
        ]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};