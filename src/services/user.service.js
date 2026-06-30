const db = require("../config/db");

exports.getUsers = (callback) => {

  const sql = "SELECT * FROM users";

  db.query(sql, callback);

};

exports.getUser = (id, callback) => {

  const sql = "SELECT * FROM users WHERE id=?";

  db.query(sql, [id], callback);

};

exports.createUser = (data, callback) => {

  const sql = `
    INSERT INTO users(name,email,age)
    VALUES(?,?,?)
    `;

  db.query(
    sql,
    [data.name, data.email, data.age],
    callback
  );

};

exports.updateUser = (id, data, callback) => {

  const sql = `
    UPDATE users
    SET name=?,email=?,age=?
    WHERE id=?
    `;

  db.query(
    sql,
    [data.name, data.email, data.age, id],
    callback
  );

};

exports.deleteUser = (id, callback) => {

  const sql = "DELETE FROM users WHERE id=?";

  db.query(sql, [id], callback);

};