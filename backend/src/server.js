import dotenv from "dotenv";
import app from "./app.js";
import db from "./config/db.js";

dotenv.config();

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed!");
    console.log(err);
    return;
  }

  console.log("Database Connected Successfully!");

  app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
  });
});