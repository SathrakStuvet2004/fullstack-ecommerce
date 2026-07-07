import { Router } from "express";
import * as eamilVerifycontroller from '../controllers/emailVerify.controller.js'

const router = Router()

router.get('/token', eamilVerifycontroller.emailVerify)

export default router;