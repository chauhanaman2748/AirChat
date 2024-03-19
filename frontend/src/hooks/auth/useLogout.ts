import { useState } from "react"
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
        const res = await fetch("/api/auth/logout", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("auth-user")
        setAuthUser(null)
    } catch (error: unknown) {
        if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("An unknown error occurred.");
        }
    } finally {
        setLoading(false);
    }
  }

  return {loading, logout};
}

export default useLogout