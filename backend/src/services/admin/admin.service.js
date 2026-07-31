import { error } from "console";
import { promiseDb } from "../../config/db.js";
import { sendMail } from "../mail.service.js";
import crypto from "crypto";

export const addDoctor = async (doctor) => {

  const { name, email, username, phone, gender, dob, address, department, specialization, qualification, experience, consultationFee, licenseNumber, status } = doctor;

  const token = crypto.randomBytes(32).toString("hex");

  /*
    the example doctor data
    { 
"address": "kottaram",
"consultationFee": 1,
"department": 1,
"dob": "2026-07-07",
"email": "sathrakstuvet617@gmail.com",
"experience": 8,
"gender": "Male",
"licenseNumber": "423212",
"name": "sathrak",
"phone": "1234567890",
"qualification": "mbbs",
"specialization": "general",
"status": "Active",
"username": "sathrak"
}
  */
  const connection = await promiseDb.getConnection();

  try {
    let sql = ""
    let user_id = 0;

    await connection.beginTransaction();

    try {

      sql = `insert into users (name,email,user_name, phone,gender,date_of_birth,address,role,verification_token)
        values(?,?,?,?,?,?,?,?,?)`

      const role = "doctor"

      const [result_of_create_user] = await connection.query(sql, [name, email, username, phone, gender, dob, address, role, token])

      user_id = result_of_create_user.insertId;

    } catch (err) {

      if (err.code === "ER_DUP_ENTRY") {
        const error = new Error("User already exists");
        error.statusCode = 409;

        throw error;

      }

      throw new Error("Unable to create user")
    }

    try {

      sql = `insert into doctors (user_id,department_id,specialization,qualification,experience,consultation_fee,license_number,status)
      values(?,?,?,?,?,?,?,?)`

      const [doctor] = await connection.query(sql, [user_id, department, specialization, qualification, experience, consultationFee, licenseNumber, status])

    } catch (err) {

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

  try {

    const verifyUrl = `http://localhost:5173/api/verify?token=${token}`;

    await sendMail({
      to: email,
      subject: "Complete Your Doctor Account Setup",
      html: `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; color: #333; line-height: 1.6;">

      <h2 style="color: #0d6efd; margin-bottom: 10px;">
        Welcome to Our Healthcare Management System
      </h2>

      <p>Hello <strong>Dr. ${name}</strong>,</p>

      <p>
        An administrator has created a doctor account for you.
        To activate your account, you need to verify your email address and create your password.
      </p>

      <div style="background:#f8f9fa; border-left:4px solid #0d6efd; padding:15px; margin:25px 0;">
        <strong>What you'll do:</strong>
        <ol style="margin-top:10px;">
          <li>Verify your email address.</li>
          <li>Create a secure password.</li>
          <li>Sign in to your doctor account.</li>
        </ol>
      </div>

      <div style="text-align:center; margin:35px 0;">
        <a
          href="${verifyUrl}"
          style="
            background:#0d6efd;
            color:#ffffff;
            text-decoration:none;
            padding:14px 30px;
            border-radius:6px;
            display:inline-block;
            font-weight:bold;
            font-size:16px;
          "
        >
          Verify Email & Set Password
        </a>
      </div>

      <p>
        If the button above doesn't work, copy and paste the following link into your browser:
      </p>

      <p style="word-break: break-all;">
        <a href="${verifyUrl}">${verifyUrl}</a>
      </p>

      <p>
        <strong>Security Notice:</strong> This verification link should only be used by you.
        If you were not expecting this email, please ignore it or contact your administrator.
      </p>

      <hr style="margin:30px 0; border:none; border-top:1px solid #ddd;" />

      <p style="font-size:14px; color:#666;">
        Thank you,<br>
        <strong>Healthcare Management System</strong>
      </p>

    </div>  
  `,
    });

    return true;

  } catch (err) {

    throw new Error("Unable to send mail")
  }
}
