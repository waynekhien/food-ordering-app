import express from "express";
import multer from "multer";
import { createMyRestaurant } from "../controllers/restaurant.controller.js";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware.js";
import { validateMyRestaurantRequest } from "../middleware/validation.middleware.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 5 * 1024 * 1024, // 5mb
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  createMyRestaurant,
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse
);

export default router;
