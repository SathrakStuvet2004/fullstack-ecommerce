import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import { authme } from "../controllers/authme.controller.js";

const router = Router();

router.get("/me", auth, authme)

export default router;