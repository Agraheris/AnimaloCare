const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const type = await tables.type.readAll();
    res.json(type);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
