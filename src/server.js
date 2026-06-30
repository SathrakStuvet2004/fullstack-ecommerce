require("dotenv").config();

const app = require("./app");
const db = require("./config/db");

db.connect((err) => {
  if (err) {
    console.log(" Database Connection Failed!");
    console.log(err);
    return;
  }

  console.log("Database Connected Successfully!");

  app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
  });
});