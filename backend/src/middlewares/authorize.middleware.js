import { errorResponse } from "../utils/response.js";

export const authorize = (...roles) => {

  return (req, res, next) => {

    if (!req.user) {
      return errorResponse(res, 401, "Unauthorized")
    }

    if (!roles.includes(req.user.role)) {
      return errorResponse(res, 403, "Forbidden: You do not have permission")
    }
    next()
  }
}