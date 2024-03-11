import { Request, Response } from 'express';

export const LogOutUser = (req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Logged out Successfully"})
    } catch (error) {
        console.log("Error in logout controller", error);
        res.status(500).json({error: "Internal Server Error"})
    }
}