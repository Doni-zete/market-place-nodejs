const Produto = require("../model/Produto");

const findProductByIdSevice = (id) => {
  return Produto.findById(id);
};

const findAllProductsService = () => {
  return Produto.find();
};

const createProductService = (body) => {
  return Produto.create(body);
};

const updateProductService = (id, body) => {
  return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteProductService = (id) => {
  return Produto.findByIdAndRemove(id);
};

module.exports = {
  findProductByIdSevice,
  findAllProductsService,
  createProductService,
  updateProductService,
  deleteProductService,
};
