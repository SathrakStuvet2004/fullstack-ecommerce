import db from '../config/db.js';

export const emailVerify = (data, callback) => {

  let sql = `select * from users 
    where verification_token = ?`;

  db.query(sql, [data.token], (err, result) => {

    if (err) {
      return callback(err);
    }

    const user = result[0];

    if (user) {

      sql = `update users
             set is_verified = ?
             where verification_token = ?`;

      return db.query(sql, [true, data.token], (err, result) => {
        console.log(result);
        console.log(user);

        if (err) {
          return callback(err);
        }

        return callback(null, result);
      });
    }

    return callback(null, result);
  });
};