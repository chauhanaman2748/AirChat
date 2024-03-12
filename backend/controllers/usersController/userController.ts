import { Request, Response } from 'express';
import { User } from '../../models';

export const getUsersForSidebar = async (req: Request, res: Response) => {
    try {
        
        const senderId = req.user._id;
        const filteredUsers = await User.find({ _id: {$ne: senderId} }).select("-password")

        res.status(200).json(filteredUsers);

    } catch (error: any) {
        console.error("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}