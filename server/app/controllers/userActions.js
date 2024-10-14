// Import access to database tables
const tables = require("../../database/tables");

const { hashPassword } = require("../services/auth");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
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
      res.json({ ...user, pets });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, location } =
      req.body;
    const existingUser = await tables.user.readByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: "Email déjà utilisé" });
    } else {
    const hashedPassword = await hashPassword(password);

    const result = await tables.user.create({
      firstName,
      lastName,
      email,
      hashedPassword,
      phoneNumber,
      location,
    });
    res.status(201).json({
      message: `Utilisateur ajouté avec succès`,
      userId: result.insertId,
    });
  }
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const user = { id: parseInt(req.params.id, 10) };
  if (req.body.user_id !== user.id){
    res.sendStatus(403)
    return
  }
  
  try {
    await tables.user.delete(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: parseInt(req.params.id, 10)};
  if (req.body.user_id !== user.id) {
    res.sendStatus(403)
    return
  }
  
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
