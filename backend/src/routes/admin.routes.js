import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import { getDepartmentList } from "../controllers/department.controller.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { validate } from "../validators/validator.js";
import {  doctorSchema } from "../schemas/createDoctor.schema.js";
import { createDoctor } from "../controllers/admin/admin.controller.js";

const router = Router()

router.get("/department", auth, authorize("Admin"), getDepartmentList)

router.post("/doctor/add", auth, authorize("Admin"), validate(doctorSchema), createDoctor)


export default router