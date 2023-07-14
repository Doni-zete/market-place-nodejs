const router = require("express").Router();
const authController = require("../controller/auth.controller");
const {validaLogin} = require("../middleware/validacao.middlewate")

router.post("/login",validaLogin, authController.loginController);

module.exports = router;
