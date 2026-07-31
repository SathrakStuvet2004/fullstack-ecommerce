import { promiseDb } from "../../config/db.js";

export const addDoctor = async (doctor) => {

  console.log("inside the service")

  const { name, email, username, phone, gender, dob, address, department, specialization, qualification, experience, consultationFee, licenseNumber, status } = doctor;

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
                                "username": "admin"
    }
  */
  const connection = await promiseDb.getConnection();

  try {
    let sql = ""
    let user_id = 0;

    await connection.beginTransaction();

    try {

      console.log("start creating user")

      sql = `insert into users (name,email,user_name, phone,gender,date_of_birth,address,role)
        values(?,?,?,?,?,?,?,?)`

      const role = "doctor"

      const [result_of_create_user] = await connection.query(sql, [name, email, username, phone, gender, dob, address, role])

      user_id = result_of_create_user.insertId;

      console.log("finish creataing user")

    } catch (err) {
      console.log("inside the create user query error block", err)

      if (err.code === "ER_DUP_ENTRY") {
        throw new Error("User Already Exist")
      }

      throw new Error("Unable to create user")
    }

    try {
      console.log("start creataing doctor")
      sql = `insert into doctors (user_id,department_id,specialization,qualification,experience,consultation_fee,license_number,status)
      values(?,?,?,?,?,?,?,?)`

      const [doctor] = await connection.query(sql, [user_id, department, specialization, qualification, experience, consultationFee, licenseNumbers])

    } catch (err) {
      console.log("inside the create doctor err block", err)

      throw new Error("Unable to create doctor", err)
    }

    await connection.commit();

  } catch (err) {

    await connection.rollback();

    throw new Error(err.message)
  }
  finally {
    connection.release();
  }
}

console.log("successfully create the doctor and start sending the mail")

