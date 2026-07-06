import { successResponse, errorResponse } from "../utils/response.js";
import * as signupService from "../services/signup.service.js";

export const createUser = (req, res) => {

  signupService.createUser(req.body, (err, result) => {

    if (err) {
      if(err.code === "ER_DUP_ENTRY"){
        return errorResponse(
          res,
          400,
          "Email already exists"
        );
      }
      return errorResponse(
        res,
        500,
        "Failed to create user",
      );
    }

    return successResponse(
      res,
      201,
      "check your email for verification",
      {
        id: result.insertId,
      }
    );
  });
};