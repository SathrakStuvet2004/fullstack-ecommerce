import bcrypt from "bcryptjs";
import db from "../config/db.js";

export const createUser = (data, callback) => {

  const password = bcrypt.hashSync(data.password, 10);

  const sql = `insert into users(name,email,password,role) values(?,?,?,?)`


  db.query(sql, [data.name, data.email, password, data.role], callback)

}