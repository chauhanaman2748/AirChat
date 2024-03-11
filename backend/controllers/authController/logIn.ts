import bcrypt from "bcryptjs";
import { Request, Response } from 'express';
import { User } from '../../models';
import { generateTokenAndSetCookie } from "../../services";

export const LogInUser = async (req: Request, res: Response) => {
    try {
        const {userName, password} = req.body;

        if (!userName || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const user = await User.findOne({userName});
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect)
            return res.status(400).json({error: "Invalid username or password"});

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in login controller", error);
        res.status(500).json({error: "Internal Server Error"})
    }
}