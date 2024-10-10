const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { hashed_password } = req.body;
    console.info(req.body);

    // eslint-disable-next-line camelcase
    if (!hashed_password) {
      throw new Error('Password is missing');
    }

    const hashedPassword = await argon2.hash(hashed_password, hashingOptions);

    req.body.hashed_password = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
};


const verifyToken = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (!auth) {
      throw new Error("");
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
  hashPassword,
  verifyToken,
  verifyUserField,
};