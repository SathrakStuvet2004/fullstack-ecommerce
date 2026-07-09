import * as loginService from "../services/login.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const loginUser = (req, res) => {
  
  loginService.loginUser(req.body,res,
    (err, user) => {

      if (err) {
        return errorResponse(res, 401, err.message)
      }
      return successResponse(res, 200, "Login successful", user);
    })
}