import { promiseDb } from "../../config/db.js";

export const addDoctor = async (doctor) => {

  console.log("inside the service")

  /*
    the example doctor data
    {
      "address": "kottaram",
        "consultationFee": 1,
          "department": 1,
            "dob": "2026-07-07",
              "email": "sathrakstuvet51@gmail.com",
                "experience": 8,
                  "gender": "Male",
                    "licenseNumber": "423212",
                      "name": "sathrak",
                        "phone": "1234567890",
                          "qualification": "mbbs",
                            "specialization": "general",
                              "status": "Active",
                                "username": "sa123"
    }
  */

  const connection = await promiseDb.getConnection();

  try {

    let user_id = "";

    await connection.beginTransaction();

    try {

      const create_user_sql = `insert into users (name,email,role)
        values(?,?,?)`

      const role = "doctor"

      const [result_create_user_sql] = await connection.query(create_user_sql, [doctor.fullName, doctor.email, role])

      console.log("result of create user ", result_create_user_sql)

      console.log("create user id", result_create_user_sql.insertId)

    } catch (err) {
      console.log("inside the first query error block", err)
    }

    await connection.commit();

  } catch (err) {

    await connection.rollback();

    return new Error(err.message)
  }
  finally {
    connection.release();
  }
}