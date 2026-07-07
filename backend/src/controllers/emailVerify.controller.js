import * as emailVerifyService from '../services/emailVerify.service.js'
import { successResponse, errorResponse } from '../utils/response.js'

export const emailVerify = (req, res) => {

  emailVerifyService.emailVerify(req.body, (err, result) => {

    if (err) {
      errorResponse(
        res,
        401,
        "Unauthorized. Please log in."
      )
    }
    return (
      successResponse(
        res,
        200,
        'verification successfully'
      )
    )
  })
}