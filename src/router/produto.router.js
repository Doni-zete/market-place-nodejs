const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.all("/find/:id", authMiddleware, produtoController.findProductByIdController)
router.all("/findAll", authMiddleware, produtoController.findAllProductController)
router.all("/create", authMiddleware, produtoController.createProductController)
router.all("/update/:id", authMiddleware, produtoController.updateProductController)
router.all("/delete/:id", authMiddleware, produtoController.deleteProductController)

module.exports = router;
