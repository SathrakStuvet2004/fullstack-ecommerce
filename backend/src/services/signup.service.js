import bcrypt from "bcryptjs";
import db from "../config/db.js";
import { generateToken } from '../utils/token.js'
import { hashPassword } from "../utils/bcrypt.js";
import { addMinutes } from "../utils/date.js";
import { sendMail } from "../services/mail.service.js";
import crypto from "crypto";

export const createUser = (data, callback) => {

  const password = hashPassword(data.password)

  const token = crypto.randomBytes(32).toString("hex");

  const sql = `insert into users(name,email,password,verification_token)
  values(?,?,?,?) `

  db.query(sql, [data.name, data.email, password, token], async (err, result) => {

    if (err) {
      return callback(err)
    }

    await sendMail({
      to: data.email,
      subject: "Verify your email",
      html: `
          <h2>Welcome!</h2>
          <p>Please verify your email by clicking the link below.</p>
          <a href="http://localhost:5173/api/verify?token=${token}">
            Verify Email
          </a>`,
    });

    return callback(null, result);

    /*
    these all are the manual process of verification
    if (err) {
      return callback(err);
    }

    const user = result[0];

    let sql = ''

    if (!user) {

      const password = hashPassword(data.password)

      const token = generateToken(data);

      const expires = addMinutes(15)

      sql = `insert into users(name,email,password,role,verification_token,verification_expires) values(?,?,?,?,?,?)`

      db.query(sql, [data.name, data.email, password, data.role, token, expires], async (err, result) => {
        if (err) {
          return callback(err)
        }
        await sendMail({
          to: data.email,
          subject: "Verify your email",
          html: `
          <h2>Welcome!</h2>
          <p>Please verify your email by clicking the link below.</p>
          <a href="http://localhost:5173/verify?token=${token}">
            Verify Email
          </a>`,
        });
        return callback(null,result)
      })
    }

    const is_verified = user.is_verified

    if (user.is_verified === 0) {
      return console.log("user is available so we want to send the verified token")
    }

    if (user && is_verified) {
      return console.log("user already exists")
    }
*/
  })
}
