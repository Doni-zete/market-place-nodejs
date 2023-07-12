const carrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
  try {
    res.status(200).send(await carrinhoService.findCarrinhoByIdService);
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente" });
    console.log(err.message);
  }
};

const findAllCarrinhoController = async (req, res) => {
  try {
    res.status(200).send(await carrinhoService.findAllCarrinhoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente" });
    console.log(err.message);
  }
};

const createCarrinhoController = async (req, res) => {
  try {
    res.status(201).send(await carrinhoService.createCarrinhoService(req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente" });
    console.log(err.message);
  }
};

const updateCarrinhoController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await carrinhoService.updateCarrinhoService(req.params.id, req.body)
      );
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente" });
    console.log(err.message);
  }
};

const deleteCarrinhoController = async (id) => {
  try {
    res
      .status(200)
      .send(await carrinhoService.updateCarrinhoService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente" });
    console.log(err.message);
  }
};

module.exports = {
  findCarrinhoByIdController,
  findAllCarrinhoController,
  createCarrinhoController,
  updateCarrinhoController,
  deleteCarrinhoController,
};
