import * as userService from "../services/user.service.js";
import { successResponse, errorResponse, } from "../utils/response.js";

export const getUsers = (req, res) => {
  
  const user = req.user

  userService.getUsers(user,(err, result) => {
    if (err) {
      return errorResponse(
        res,
        500,
        "Failed to fetch users"
      );
    }

    return successResponse(
      res,
      200,
      "Users fetched successfully",
      result
    );
  });
};

export const getUser = (req, res) => {
  const id = req.params.id;

  userService.getUser(id, (err, result) => {
    if (err) {
      return errorResponse(
        res,
        500,
        "Failed to fetch user"
      );
    }

    if (result.length === 0) {
      return errorResponse(
        res,
        404,
        "User not found"
      );
    }

    return successResponse(
      res,
      200,
      "User fetched successfully",
      result[0]
    );
  });
};

export const createUser = (req, res) => {
  userService.createUser(req.body, (err, result) => {

    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
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
      "User created successfully",
      {
        id: result.insertId,
      }
    );
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;

  userService.updateUser(id, req.body, (err, result) => {
    if (err) {
      return errorResponse(
        res,
        500,
        "Failed to update user"
      );
    }

    if (result.affectedRows === 0) {
      return errorResponse(
        res,
        404,
        "User not found"
      );
    }

    return successResponse(
      res,
      200,
      "User updated successfully"
    );
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  userService.deleteUser(id, (err, result) => {
    if (err) {
      return errorResponse(
        res,
        500,
        "Failed to delete user"
      );
    }

    if (result.affectedRows === 0) {
      return errorResponse(
        res,
        404,
        "User not found"
      );
    }

    return successResponse(
      res,
      200,
      "User deleted successfully"
    );
  });
};