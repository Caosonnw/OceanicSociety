const middlewareControllers = require("../Controllers/middlewareControllers");
const userControllers = require("../Controllers/userControllers");
const router = require("express").Router();

//GET ALL USERS
router.get("/getallusers", middlewareControllers.verifyToken, userControllers.getAllUsers);

//DELETE USER
router.delete("/:id", middlewareControllers.verifyTokenAndAdminAuth, userControllers.deleteUser);

module.exports = router;