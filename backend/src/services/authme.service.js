import { promiseDb } from "../config/db.js";

export const authme = async (user_info, callback) => {

  const query = `select * from users where id = ?`

  const [users] = await promiseDb.query(query, [user_info.id]);

  const user = users[0];

  const user_information = { id: user.id, name: user.name, role: user.role, is_active: user.is_active }

  callback(null, user_information)
}