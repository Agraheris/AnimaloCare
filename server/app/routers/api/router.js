const express = require("express");

const router = express.Router();

// Define Your API Routes Here
/* ************************************************************************* */
const middleware = require("../../services/middleware")
const user = require("../../controllers/userActions");

router.get("/user", user.browse);
router.get("/user/:id", user.read);
router.post("/user", middleware.hashPassword, user.add);
router.delete("/user/:id", user.destroy);
router.put("/user/:id", user.edit);

const pet = require("../../controllers/petActions")

router.post("/pet", pet.add)
router.delete("/pet/:id", pet.destroy);

const annoncement = require("../../controllers/AnnoncementAction")

router.get("/annoncement", annoncement.browse)
router.get("/annoncement/:id", annoncement.read)
router.post("/annoncement", annoncement.add)
router.delete("/annoncement/:id",annoncement.destroy)

const type = require("../../controllers/TypeAction")

router.get("/types", type.browse)

/* ************************************************************************* */

module.exports = router;
