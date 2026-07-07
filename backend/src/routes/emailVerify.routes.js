import { Router } from "express";
import * as eamilVerifycontroller from '../controllers/emailVerify.controller.js'

const router = Router()

router.post('/token', eamilVerifycontroller.emailVerify)

export default router;