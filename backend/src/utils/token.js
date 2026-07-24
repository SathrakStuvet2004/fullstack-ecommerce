import jwt from "jsonwebtoken";
import { errorResponse } from "./response.js";

export const GenerateRefreshToken = (payload, expiresIn = "7d") => {

  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn,
  });
};

export const GenerateAccessToken = (payload, expiresIn = "15m") => {
  
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn,
  });
};
 
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {   
    return false
  }
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return false
  }
}