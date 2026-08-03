import { promiseDb } from "../config/db.js"
import { ApiError } from "../utils/ApiError.js"

export const email_verify = async (token) => {

  let sql = ""

  try {

    sql = `select * from users where  verification_token = ?`

    const [result] = await promiseDb.query(sql, [token])

    if (result.length === 0) {

      throw new ApiError(404, "User not found");
    }

    const user = result[0];

    const db_verification_token = user.verification_token

    if (db_verification_token !== token) {

      throw new ApiError(400, "Please use the latest email verification link");

    } else {
      sql = `update users set is_verified = 1 where id = ?`
    }

    await promiseDb.query(sql, [user.id])

    return true

  } catch (err) {

    throw new ApiError(404, "User not found");
  }

}