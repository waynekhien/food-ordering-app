import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./users/user.route.js";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to database");
});

const app = express();
app.use(express.json());
app.use(cors());

// api
app.use("/api/my/user", userRoutes);

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
