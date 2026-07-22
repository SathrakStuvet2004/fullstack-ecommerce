import { errorResponse } from "../utils/response.js";

export const validate = (schema) => (req, res, next) => {

  const result = schema.safeParse(req.body);

  console.log(result)

  if (!result.success) {

    const err_message = result.error.issues[0].message

    console.log(err_message);

    return errorResponse(res, 400, err_message);

  }

  next();
};