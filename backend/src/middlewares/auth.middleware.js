import { hashToken } from "../utils/sha256.js";
import { GenerateAccessToken, verifyAccessToken, verifyRefreshToken } from "../utils/token.js";
import db from '../config/db.js';
import { promiseDb } from "../config/db.js";
import { errorResponse } from "../utils/response.js";
import { Query } from "@tanstack/react-query";

const auth = async (req, res, next) => {

  const ref_token = req.cookies.refreshToken;

  const acc_token = req.cookies.accessToken;

  const is_acc_TokenValid = verifyAccessToken(acc_token)

  req.user = { id: is_acc_TokenValid.id, role: is_acc_TokenValid.role };

  if (!is_acc_TokenValid) {

    const is_ref_TokenValid = verifyRefreshToken(ref_token)

    if (!is_ref_TokenValid) {
      return errorResponse(res, 401, 'unauth')
    }

    if (!is_acc_TokenValid && is_ref_TokenValid) {

      const user_id = is_ref_TokenValid.id

      const hashed_ref_token = hashToken(ref_token)

      const query = ` select * from users where id = ?`;

      const [user] = await promiseDb.query(query, [user_id])

      const current_user = user[0];

      const db_ref_token = current_user.ref_token

      if (hashed_ref_token != db_ref_token) {
        
        return errorResponse(res, 401, 'unauth')
      }

      const input_for_new_acc_token = { id: current_user.id, role: current_user.role }

      if (hashed_ref_token === db_ref_token) {

        const new_acc_token = GenerateAccessToken(input_for_new_acc_token)

        res.cookie("accessToken", new_acc_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        req.user = { id: current_user.id, role: current_user.role }
      }

    }
  }

  next();
};

export default auth;