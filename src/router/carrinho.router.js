const router = require("express").Router();

const carrinhoController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.get("/find/:id", authMiddleware, carrinhoController.findCategoriaByIdController)
router.get("/findAll", authMiddleware, carrinhoController.findAllCategoriaController)
router.post("/create", authMiddleware, carrinhoController.createCategoriaController)
router.put("/update/:id", authMiddleware, carrinhoController.updateCategoriaController)
router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCategoriaController)

module.exports = router;
