import toast from "react-hot-toast";

interface HandleInputErrorsTypes {
    userName: string;
    password: string;
}

export const handleLoginInputErrors = ({ userName, password }: HandleInputErrorsTypes): boolean => {
    if (!userName || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
};
