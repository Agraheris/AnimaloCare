// Import access to database tables
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const annoncement = await tables.annoncement.readAll();
    res.json(annoncement);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const annoncement = await tables.annoncement.read(req.params.id);
    if (annoncement == null) {
      res.sendStatus(404);
    } else {
      res.json({ annoncement });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.annoncement.create(req.body);
    res.status(201).json({
      message: `Annonce ajouté avec succès`,
      userId: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const annoncement = { id: req.params.id };
  try {
    await tables.annoncement.delete(annoncement);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
};
