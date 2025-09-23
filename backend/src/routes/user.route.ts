import express from "express";
import { createCurrentUser, updateCurrentUser } from "../controllers/user.controller.js";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware.js";
import { validateMyUserRequest } from "../middleware/validation.middleware.js";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser)

export default router;