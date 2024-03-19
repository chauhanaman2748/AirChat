import { useState } from 'react'
import { handleInputErrors } from '../../services';
import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';

interface SignupDataTypes {
    fullName: string;
    userName: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullName, userName, password, confirmPassword, gender}: SignupDataTypes) => {
        const success = handleInputErrors({fullName, userName, password, confirmPassword, gender})

        if(!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
			});

			const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("auth-user", JSON.stringify(data))
            setAuthUser(data)
			console.log(data)

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

    return {loading, signup}

}