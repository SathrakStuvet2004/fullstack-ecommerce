import { Router } from "express";
import * as signupController from "../controllers/signup.controller.js";

const router = Router();

router.post("/", signupController.createUser);

export default router;