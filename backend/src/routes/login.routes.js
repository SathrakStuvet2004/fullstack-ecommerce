import { Router } from "express";
import * as loginController from "../controllers/login.controller.js";
import { loginSchema } from "../schemas/signup.schemas.js";
import { validate } from "../validators/validator.js";

const router = Router();

router.post("/", validate(loginSchema), loginController.loginUser);

export default router;