import { authme as authmeService } from "../services/authme.service.js"
import { errorResponse, successResponse } from "../utils/response.js"

export const authme = (req, res) => {

  authmeService(req.user, (err, user) => {
    if (err) {
      return errorResponse(res, 401, "un auth")
    }
    return successResponse(res, 200, "user fetch successfully", user);
  })
}