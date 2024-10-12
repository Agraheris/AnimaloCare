const Joi = require("joi");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (!auth) {
      throw new Error("Auth is missing from cookies");
    }
    req.auth = jwt.verify(auth, process.env.APP_SECRET);
    req.body.user_id = req.auth.sub;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: "Unauthorized: Invalid or missing token" });
  }
};

const verifyUserField = (req, res, next) => {
  const schema = Joi.object({
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.ref("password"),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = {
  verifyToken,
  verifyUserField,
};