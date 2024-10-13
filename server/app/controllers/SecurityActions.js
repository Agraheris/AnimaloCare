const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const { verifyPassword } = require("../services/auth");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.readByEmail(email);
    if (!user) {
      res.status(400).json({ message: "Identifiant invalide" });
    } else {
      const passwordIsVerified = await verifyPassword(
        password,
        user.hashedPassword
      );
      if (passwordIsVerified) {
        const token = await jwt.sign({ sub: user.id }, process.env.APP_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("auth", token, { maxAge: 60 * 60 * 1000}).json({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        });
      } else {
        res.status(400).json({ message: "Identifiant invalide" });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
