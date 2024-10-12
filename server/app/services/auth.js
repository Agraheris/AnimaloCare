const argon2 = require("argon2");

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 19 * 2 ** 10,
    timeCost: 2,
    parallelism: 1,
  };

const hashPassword = async (password) => {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
    const success = await argon2.verify(hashedPassword, password);
    return success;
};

module.exports = {
    hashPassword,
    verifyPassword
  };