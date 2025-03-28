import express from "express";
import UserController from "../controllers/UserController";
import {jwtCheck, jwtParse} from "../middleware/auth";
import {validateUserRequest} from "../middleware/validation";

const router = express.Router();


// /api/user/
// @ts-ignore
router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser);
// @ts-ignore
router.post("/", jwtCheck, UserController.createCurrentUser);
// @ts-ignore
router.put("/", jwtCheck, jwtParse, validateUserRequest, UserController.updateCurrentUser);

export default router;