const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller")

router.get('/findById:id');
router.get('/findAll');

router.post('/create');
router.post('/addAddress/:id');
router.post('/addFavProduct/:id');

router.put('/update/:id')

router.delete('/remove/:id');
router.delete('/removeAddress');
router.delete('/removeFavProduct');

//exportando todas as rotas
module.exports = router;
