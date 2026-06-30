const auth = (req, res, next) => {
  console.log("Authentication Checked");

  next();
};

export default auth;