import bcrypt from "bcryptjs";
import db from "../config/db.js";
import { hashPassword } from "../utils/bcrypt.js";
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

  })
}
