import { successResponse, errorResponse } from "../utils/response.js";
import * as signupService from "../services/signup.service.js";

export const createUser = (req, res) => {

  signupService.createUser(req.body, (err, result) => {

    console.log(req.body)

    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return errorResponse(
          res,
          409,
          'user already exist.'
        )
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
      "account created succesfully, check your mail for verification",
      {
        id: result.insertId,
      }
    );
  });
};