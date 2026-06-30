import * as userService from "../services/user.service.js";

export const getUsers = (req, res) => {
  userService.getUsers((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

export const getUser = (req, res) => {
  const id = req.params.id;

  userService.getUser(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

export const createUser = (req, res) => {
  userService.createUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "User Created",
    });
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;

  userService.updateUser(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Updated Successfully",
    });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  userService.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Deleted Successfully",
    });
  });
};