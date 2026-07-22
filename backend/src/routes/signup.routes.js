import { Router } from "express";
import * as signupController from "../controllers/signup.controller.js";
import { validate } from "../validators/validator.js";
import { signupSchema } from "../schemas/signup.schemas.js";

const router = Router();

router.post("/", validate(signupSchema), signupController.createUser);

export default router;