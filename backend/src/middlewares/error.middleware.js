import { errorResponse } from "../utils/response.js";

export const errorHandler = (err, req, res, next) => {

  return errorResponse(
    res,
    err.statusCode || 500,
    err.message || "Internal Server Error"
  );

};