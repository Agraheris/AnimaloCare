const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const security = require("../../controllers/SecurityActions");

router.post("/login", security.login);

const user = require("../../controllers/UserActions");

router.get("/user", user.browse);
router.get("/user/:id", user.read);
router.post("/user", user.add);
router.delete("/user/:id", user.destroy);
router.put("/user/:id", user.edit);

const pet = require("../../controllers/PetActions");

router.post("/pet", pet.add);
router.delete("/pet/:id", pet.destroy);

const annoncement = require("../../controllers/AnnoncementActions");

router.get("/annoncement", annoncement.browse);
router.get("/annoncement/:id", annoncement.read);
router.post("/annoncement", annoncement.add);
router.delete("/annoncement/:id", annoncement.destroy);

const type = require("../../controllers/TypeActions");

router.get("/types", type.browse);

/* ************************************************************************* */

module.exports = router;
