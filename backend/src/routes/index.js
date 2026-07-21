import { Router } from "express";
import userRoutes from "./user.routes.js";
import signupRoutes from "./signup.routes.js";
import loginRoutes from "./login.routes.js";
import emailVerifyRoutes from "./emailVerify.routes.js"
import authme from "./authme.routes.js"

const router = Router();

router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);
router.use("/verify", emailVerifyRoutes);
router.use("/auth",authme);
router.use("/users", userRoutes);


export default router;