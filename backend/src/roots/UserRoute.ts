import express from "express";
import UserController from "../controllers/UserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();


// @ts-ignore
router.post("/", jwtCheck, UserController.createCurrentUser);

export default router;