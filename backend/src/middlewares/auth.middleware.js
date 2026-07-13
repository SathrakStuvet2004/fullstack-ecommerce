import { hashToken } from "../utils/sha256.js";
import { GenerateAccessToken, verifyAccessToken, verifyRefreshToken } from "../utils/token.js";
import db from '../config/db.js';
import { promiseDb } from "../config/db.js";
import { errorResponse } from "../utils/response.js";

const auth = async (req, res, next) => {

  const ref_token = req.cookies.refreshToken

  const acc_token = req.cookies.accessToken

  if (!ref_token) {
    return errorResponse(res, 401, "Unauthorized")
  }

  if (ref_token && !acc_token) {

    const hashed_ref_token = hashToken(ref_token);

    const sql = `select * from users where ref_token = ?`

    const [result] = await promiseDb.query(sql, [hashed_ref_token])

    const user = result[0]

    const db_ref_token = user.ref_token

    if (hashed_ref_token !== db_ref_token) {
      return errorResponse(res, 401, "Unauthorized")
    }

    if (hashed_ref_token === db_ref_token) {

      const is_refershTokenValid = verifyRefreshToken(ref_token)

      const new_acc_token = GenerateAccessToken({ id: is_refershTokenValid.id, role: is_refershTokenValid.role })

      const verify_new_acc_token = verifyAccessToken(new_acc_token)

      console.log(verify_new_acc_token)

      res.cookie("accessToken", new_acc_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      req.userId = is_refershTokenValid.id;
      req.userRole = is_refershTokenValid.role;
    }
  }

  const is_valid_refresh_token = verifyRefreshToken(ref_token);

  req.userId = is_valid_refresh_token.id
  req.userRole = is_valid_refresh_token.role

  next();
};

export default auth;