import toast from "react-hot-toast";

interface HandleInputErrorsTypes {
    fullName: string;
    userName: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

export const handleInputErrors = ({ fullName, userName, password, confirmPassword, gender }: HandleInputErrorsTypes) => {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    console.log('Validation Passed');

    return true;
}
