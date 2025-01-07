import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("DB connect success"))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
    res.json({ message: "Hello" });
});

const PORT = process.env.PORT || 7000; // Use environment variable for port

app.listen(PORT, () => {
    console.log(`Server started at localhost:${PORT}`);
});