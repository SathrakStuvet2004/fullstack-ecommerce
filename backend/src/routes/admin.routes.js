import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import { getDepartmentList } from "../controllers/department.controller.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = Router()

router.get("/department", auth, authorize("Admin"), getDepartmentList)
router.post("/doctor/add", auth, authorize("admin"))


export default router