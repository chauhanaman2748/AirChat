import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Response } from 'express';

const generateTokenAndSetCookie = (userId: mongoose.Types.ObjectId, res: Response) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("MONGO_DB_URI is not defined in environment variables");
    }
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;