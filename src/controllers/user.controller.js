const userService = require("../services/user.service");

exports.getUsers = (req, res) => {

  userService.getUsers((err, result) => {

    if (err)
      return res.status(500).json(err);

    res.json(result);

  });

};

exports.getUser = (req, res) => {

  const id = req.params.id;

  userService.getUser(id, (err, result) => {

    if (err)
      return res.status(500).json(err);

    res.json(result);

  });

};

exports.createUser = (req, res) => {

  userService.createUser(req.body, (err, result) => {

    if (err)
      return res.status(500).json(err);

    res.json({
      message: "User Created"
    });

  });

};

exports.updateUser = (req, res) => {

  const id = req.params.id;

  userService.updateUser(id, req.body, (err, result) => {

    if (err)
      return res.status(500).json(err);

    res.json({
      message: "Updated Successfully"
    });

  });

};

exports.deleteUser = (req, res) => {

  const id = req.params.id;

  userService.deleteUser(id, (err, result) => {

    if (err)
      return res.status(500).json(err);

    res.json({
      message: "Deleted Successfully"
    });

  });

};