import bcrypt from "bcryptjs";
import db from "../config/db.js";
import { generateToken } from '../utils/token.js'
import { hashPassword } from "../utils/bcrypt.js";
import { addMinutes } from "../utils/date.js";

export const createUser = (data, callback) => {

  const sql = `select * from users
  where email = ? `

  db.query(sql, [data.email], (err, result) => {

    if(err){
      return callback(err);
    }

    const user = result[0];

    let sql = ''

    if (!user) {

      const password = hashPassword(data.password)

      const token = generateToken(data);

      const expires = addMinutes(15)

      sql = `insert into users(name,email,password,role,verification_token,verification_expires) values(?,?,?,?,?,?)`

      return  db.query(sql, [data.name, data.email, password, data.role, token, expires], callback)

    }
    const is_verified = user.is_verified

    if (user.is_verified === 0) {
      return console.log("user is available so we want to send the verified token")
    }

    if (user && is_verified) {
      return console.log("user already exists")
    }

  })
}
// const password = bcrypt.hashSync(data.password, 10);

// const token = jwt.sign(
//   {
//     id: data.name,
//     email: data.email
//   },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "15m",
//   }
// );

// const expires = new Date(Date.now() + 15 * 60 * 1000);

// const sql = `insert into users(name,email,password,role,verification_token,verification_expires) values(?,?,?,?,?,?)`

// db.query(sql, [data.name, data.email, password, data.role, token, expires], callback)

// console.log(data);

