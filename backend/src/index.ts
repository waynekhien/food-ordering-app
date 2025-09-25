import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import myRestaurantRoute from "./routes/restaurant.route.js"
import {v2 as cloudinary} from "cloudinary";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to database");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!
})

const app = express();
app.use(express.json());
app.use(cors());

// api
app.get("/health", async (req: Request, res: Response) => {
  res.json({
    message: "Health OK!",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
  });
});
app.use("/api/my/user", userRoutes);
app.use("/api/my/restaurant", myRestaurantRoute)

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
