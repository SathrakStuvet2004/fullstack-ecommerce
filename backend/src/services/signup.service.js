import db from "../config/db.js";

export const createUser = (data, callback)=>{

  let sql = "";

  if (data.role === "user"){
    return sql = `insert into users(name,email,password,role) values(?,?,?,?)`
  }

  else if (data.role === "seller"){
    return sql = `insert into sellers(name,email,password,role) values(?,?,?,?)`
  }

  db.query(sql,[data.name,data.email,data.password,data.role],callback)
  
}