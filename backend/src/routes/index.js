import { Router } from "express";
import userRoutes from "./user.routes.js";

const router = Router();

//router.use("/login", loginRoutes);
router.use("/users", userRoutes);

export default router;