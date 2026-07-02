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

  if (data.role === "user") {
    let sql = `
    INSERT INTO users(name, email, password, role)
    VALUES (?, ?, ?, ?)
  `;
    db.query(
      sql,
      [data.name, data.email, data.password, data.role],
      callback
    );
  }

  if (data.role === "seller") {
    let sql = `
    INSERT INTO sellers(name, email, password, role)
    VALUES (?, ?, ?, ?)
  `
    db.query(
      sql,
      [data.name, data.email, data.password, data.role],
      callback
    );
  }
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