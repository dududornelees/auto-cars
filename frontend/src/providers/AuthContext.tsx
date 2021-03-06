import React, { useState, createContext, useContext, SetStateAction } from "react";
import { Dispatch } from "react";
import API from "services/API";

// Types
type AuthContextType = {
    user: User | {};
    setUser: Dispatch<SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
    children: React.ReactNode;
};

const initialValue = {
    user: {},
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {}
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState(initialValue.user);
    const [isAuthenticated, setIsAuthenticated] = useState(initialValue.isAuthenticated);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
