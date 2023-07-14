const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
  try {
    res.send(await produtoService.findProductByIdSevice(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const findAllProductController = async (req, res) => {
  try {
    res.send(await produtoService.findAllProductsService(req.query.limit, req.query.offset));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const createProductController = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId,
    };
    res.send(await produtoService.createProductService(corpo));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const updateProductController = async (req, res) => {
  try {
    res.send(
      await produtoService.updateProductService(req.params.id, req.body)
    );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const deleteProductController = async (req, res) => {
  try {
    res.send(await produtoService.deleteProductService(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const addCategoriaProdutoController = async (req, res) => {
  try{
    const categoria = await produtoService.addCategoriaProdutoService(req.params.id,req.body);

    if(categoria.ok == 1 && categoria.value != null){
      res.status(200).send({ message: 'categoria adicionada com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

const removeCategoriaProdutoController = async (req, res) => {
  try {
    const categoria = await produtoService.removeCategoriaProdutoService(
      req.params.id,
      req.body
    );
    res.status(200).send(categoria);
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

module.exports = {
  findProductByIdController,
  findAllProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  addCategoriaProdutoController,
  removeCategoriaProdutoController,
};
