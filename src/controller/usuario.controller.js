const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(req.params.id);
    if (!user) {
      return res
        .status(404)
        .send({ message: `USuario não encontrado, tente novamente` });
    }
    return res.status(200).send();
  } catch (err) {
    if (err.kind == "ObjectId") {
      console.log(err.kind == "ObjectId");
      return res.status(500).send({
        message: `Erro ID infomado,esta incorreto, tente novamente!!`,
      });
    }
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const findAllUsersController = async (req, res) => {
  try {
    return res.status(200).send(await userService.findAllUsersService());
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const createUserController = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome) {
      return res
        .status(400)
        .send({ message: `O campo 'nome' precisa ser preenchido!` });
    }
    return res.status(201).send(await userService.createUserService(body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const updateUserController = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome) {
      return res
        .status(400)
        .send({ message: `O campo 'nome' precisa ser preenchido!` });
    }
    return res.send(await userService.updateUserService(req.params.id, body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const removeUserController = async (req, res) => {
  try {
    const delletedUser = await userService.removeUserService(req.params.id);

    console.log(delletedUser);

    if (delletedUser == null) {
      return res
        .status(404)
        .send({ message: `Usuario não encontrado, tente novamente!` });
    } else {
      return res.status(200).send({ message: `Sucesso, usuario deletado!` });
    }
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const removeUserAddressController = async (req, res) => {
  try {
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const addUserAddressController = async (req, res) => {
  try {
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const addUserFavProductController = async (req, res) => {
  try {
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const removeUserFavProductController = async (req, res) => {
  try {
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

module.exports = {
  findUserByIdController,
  findAllUsersController,
  createUserController,
  removeUserController,
  updateUserController,
  addUserAddressController,
  removeUserAddressController,
  addUserFavProductController,
  removeUserFavProductController,
};
