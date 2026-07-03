import { data } from 'react-router';
import db from '../config/db.js';
import bcrypt from 'bcryptjs';

export const loginUser = (data, callback) => {

  const sql = `select * from users where email = ?`;

  db.query(sql, [data.email], (err, result) => {

    if (err) {
      return callback(err, null);
    }

    const user = result[0];

    if (!user) {
      return callback(new Error("invalid email or password"), null);
    }

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      return callback(new Error("invalid email or password"), null);
    }

    return callback(null, user);

  });

};