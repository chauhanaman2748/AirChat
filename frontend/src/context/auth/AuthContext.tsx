import { ObjectId } from 'bson';
import React, { createContext, useState, ReactNode } from "react";

interface User {
    _id: ObjectId,
    fullName: string,
    userName: string,
    profilePic: string,
    gender: string
}

export interface AuthContextType {
    authUser: User | null; 
    setAuthUser: React.Dispatch<React.SetStateAction<User | null>>; 
}

export const AuthContext = createContext<AuthContextType>({
    authUser: null,
    setAuthUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("auth-user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
