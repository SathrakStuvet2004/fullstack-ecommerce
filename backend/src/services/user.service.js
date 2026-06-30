import db from "../config/db.js";

export const getUsers = (callback) => {
  const sql = "SELECT * FROM users";

  db.query(sql, callback);
};

export const getUser = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";

  db.query(sql, [id], callback);
};

export const createUser = (data, callback) => {
  const sql = `
    INSERT INTO users(name, email, age)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [data.name, data.email, data.age],
    callback
  );
};

export const updateUser = (id, data, callback) => {
  const sql = `
    UPDATE users
    SET name = ?, email = ?, age = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [data.name, data.email, data.age, id],
    callback
  );
};

export const deleteUser = (id, callback) => {
  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], callback);
};