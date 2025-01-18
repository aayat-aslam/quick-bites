import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();


// @ts-ignore
router.post("/", UserController.createCurrentUser);

export default router;