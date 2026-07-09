import { data } from 'react-router';
import db from '../config/db.js';
import bcrypt from 'bcryptjs';
import { GenerateAccessToken, GenerateRefreshToken } from '../utils/token.js'

export const loginUser = (data, res, callback) => {

  const sql = `select * from users where email = ?`;

  let user = [];

  db.query(sql, [data.email], (err, result) => {

    if (err) {
      return callback(err, null);
    }

    let user = result[0];

    if (!user) {
      return callback(new Error(" please signUp "), null);
    }

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      return callback(new Error("invalid email or password"), null);
    }

    if (!user.is_verified) {
      return callback(new Error("check your email for verification"))
    }

    let ref_token = GenerateRefreshToken({ id: user.id, role: user.role })

    const insertTokenSql = `update users
    set ref_token = ?
    where id = ?`

    db.query(insertTokenSql, [ref_token, user.id], (err, result) => {
      if (err) {
        return callback(err)
      }
    })

    const acc_tocken = GenerateAccessToken({ id: user.id })

    res.cookie("accessToken", acc_tocken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", ref_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return callback(null);
  });
};