import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../context";

export const useAuthContext = (): AuthContextType => {
    return useContext(AuthContext);
};
