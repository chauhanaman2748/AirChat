import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
import { User } from "../../models";

declare global {
    namespace Express {
        interface Request {
            user?: any; 
        }
    }
}


const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if (!token) 
            return res.status(401).json({error: "Unauthorized - No token provided"});
        
        if (!process.env.JWT_SECRET) 
            throw new Error("JWT SECRET is not defined in environment variables");

        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        if (!decoded) 
            return res.status(401).json({error: "Unauthorized - Invalid Token"});

        const user = await User.findById(decoded.userId);

        if (!user) 
            return res.status(401).json({ error: "Unauthorized - User not found" });
        
        req.user = user;

        next();

    } catch (error: any) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default protectRoute;