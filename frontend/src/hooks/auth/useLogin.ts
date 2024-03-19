import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';
import { handleLoginInputErrors } from '../../services';

interface LoginDataTypes {
    userName: string;
    password: string;
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async({userName, password}: LoginDataTypes) => {
        const success = handleLoginInputErrors({userName, password});
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("auth-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred.");
            }
		} finally {
			setLoading(false);
		}
	};

    return {loading, login}

}