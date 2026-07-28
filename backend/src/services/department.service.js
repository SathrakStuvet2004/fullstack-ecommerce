import { promiseDb } from "../config/db.js"

export const getdepartmentinfo = async (user, callback) => {

  try {
    const [departments] = await promiseDb.query("select * from departments")

    return departments
  }
  catch (err) {
    console.log("inside the catch", err)
    throw new Error("db error")
  }
}