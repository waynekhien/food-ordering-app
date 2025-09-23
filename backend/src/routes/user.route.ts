import express from "express";
import { createCurrentUser } from "../controllers/user.controller.js";
import { jwtCheck } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);

export default router;