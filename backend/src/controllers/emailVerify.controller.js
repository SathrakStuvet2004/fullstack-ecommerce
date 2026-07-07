import * as emailVerifyService from '../services/emailVerify.service.js'
import { successResponse, errorResponse } from '../utils/response.js'

export const emailVerify = (req, res) => {

  emailVerifyService.emailVerify(req.body, (err, result) => {
    console.log("inside the api")
    if (err) {
      errorResponse(
        401,
        "Unauthorized. Please log in."
      )
    }
  })
}