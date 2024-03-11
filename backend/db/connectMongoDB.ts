import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        if (!process.env.MONGO_DB_URI) {
            throw new Error("MONGO_DB_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("DB connected");
    } catch (error: any) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectMongoDB;
