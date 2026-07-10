const auth = (req, res, next) => {
  console.log("Cookie Header:");
  console.log(req.headers.cookie);

  next();
};

export default auth;