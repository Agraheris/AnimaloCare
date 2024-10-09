// Import access to database tables
const tables = require("../../database/tables");


const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    const pets = await tables.pet.readAll(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json({...user, pets} );
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.user.create(req.body);
    res.status(201).json({
      message: `Utilisateur ajouté avec succès`,
      userId: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const user = { id: req.params.id };
  try {
    await tables.user.delete(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  try {
    await tables.user.updateUserInfo(user);
    res.sendStatus(204);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    next(error);
  }
};


module.exports = {
  browse,
  read,
  add,
  destroy,
  edit,
};
