import express from "express";
import { createCurrentUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createCurrentUser);

export default router;