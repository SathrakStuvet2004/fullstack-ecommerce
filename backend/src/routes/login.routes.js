import {Router} from "express";
import * as loginController from "../controllers/login.controller.js";

const router = Router();

router.post("/", loginController.loginUser);

export default router;