const { login, register, logOut } = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logOut);

module.exports = router;
