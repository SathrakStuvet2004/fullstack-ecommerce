import { Router } from "express";
import userRoutes from "./user.routes.js";
import signupRoutes from "./signup.routes.js";

const router = Router();

router.use("/signup", signupRoutes);
router.use("/users", userRoutes);


export default router;