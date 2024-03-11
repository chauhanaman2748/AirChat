import { Request, Response } from 'express';

export const SignUpUser = async (req: Request, res: Response) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
    } catch (error) {

    }
}