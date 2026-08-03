import { email_verify } from '../services/emailVerify.service.js'
import { successResponse, errorResponse } from '../utils/response.js'

export const emailVerify = async (req, res) => {

  const token = req.body.token

  try {

    const result = await email_verify(token)


    return successResponse(res, 200, "Email verified successfully")


  } catch (err) {

    if (err instanceof Error) {
      return errorResponse(res, err.statusCode || 500, err.message);
    }

    return errorResponse(res, 500, "Internal server error")
  }
}