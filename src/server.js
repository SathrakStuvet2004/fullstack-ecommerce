require("dotenv").config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "Loaded" : "Not Loaded");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("PORT:", process.env.PORT);

const db = require("./config/db");

db.connect((err) => {
  if (err) {
    console.log(" Database Connection Failed!");
    console.log(err);
    return;
  }

  console.log(" Database Connected Successfully!");
});