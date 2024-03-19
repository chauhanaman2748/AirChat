import React, { createContext, useState, ReactNode } from "react";

export interface AuthContextType {
    authUser: string | null;
    setAuthUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType>({
    authUser: null,
    setAuthUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<string | null>(localStorage.getItem("auth-user"));

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
