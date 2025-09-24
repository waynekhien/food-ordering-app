import express from "express";
import { createCurrentUser, getCurrentUser, updateCurrentUser } from "../controllers/user.controller.js";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware.js";
import { validateMyUserRequest } from "../middleware/validation.middleware.js";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser)
router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser)

export default router;