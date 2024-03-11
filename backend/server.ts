import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { authRoutes } from "./routes";
import { connectMongoDB } from "./db";

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
