const authControllers = require("../Controllers/authControllers");
const middlewareControllers = require("../Controllers/middlewareControllers");
const router = require("express").Router();

//REGISTER
router.post("/register", authControllers.registerUser);

//LOGIN
router.post("/login", authControllers.loginUser);

//REFRESH
router.post("/refresh", authControllers.requestRefreshToken);

//LOG OUT
router.post("/logout", middlewareControllers.verifyToken, authControllers.userLogout);

module.exports = router;