const tables = require("../../database/tables");

const browse = async (req, res, next) => {
    try {
      const user = await tables.pet.readAll();
      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  const add = async (req, res, next) => {
    try {
      const result = await tables.pet.create(req.body);
      res.status(201).json({
        message: `Animal ajouté avec succès`,
        userId: result.insertId,
      });
    } catch (error) {
      next(error);
    }
  };

  const destroy = async (req, res, next) => {
    const pet = { id: req.params.id };
    try {
      await tables.pet.delete(pet);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    browse,
    add,
    destroy
  };
  