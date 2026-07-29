import dotenv from "dotenv";
import app from "./app.js";
import { promiseDb } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  try {
    const connection = await promiseDb.getConnection();

    console.log("Database Connected Successfully!");

    connection.release();

    app.listen(process.env.PORT, () => {
      console.log(`Server Running on Port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Database Connection Failed!");
    console.error(err);
    process.exit(1);
  }
};

startServer();