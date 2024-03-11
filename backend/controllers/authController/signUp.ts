import bcrypt from "bcryptjs";
import { Request, Response } from 'express';
import { User } from "../../models";
import { generateTokenAndSetCookie } from "../../services";

export const SignUpUser = async (req: Request, res: Response) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword)
            return res.status(400).json({error:"Password don't match"});
        
        const user = await User.findOne({userName})
        if(user)
        return res.status(400).json({error:"Username already exists"});

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 5)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.userName,
                profilePic: newUser.profilePic
            })
        }
        else{
            return res.status(400).json({error:"Invalid user data"});
        }
        
    } catch (error) {
        console.log("Error in signup controller", error);
        res.status(500).json({error: "Internal Server Error"})
    }
}