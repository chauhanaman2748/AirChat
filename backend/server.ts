import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { authRoutes, messageRoutes, userRoutes } from "./routes";
import { connectMongoDB } from "./db";
import cookieParser from "cookie-parser";


const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
