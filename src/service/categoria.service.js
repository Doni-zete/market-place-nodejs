const Categoria = require("../model/Categoria");


const findAllCategoriaService =  (limit,offset) => {
  return  Categoria.find().limit(limit).skip(offset);
};

const findCategoriaByIdService = async (id) => {
  return await Categoria.findById(id);
};

const createCategoriaService = async (body) => {
  return await Categoria.create(body);
};

const updateCategoriaService = async (id, body) => {
  return await Categoria.findByIdAndUpdate(id , body, { returnDocument: "after" });
};

const deleteCategoriaService = async (id) => {
  return await Categoria.findByIdAndRemove(id);
};

module.exports = {
  findAllCategoriaService,
  findCategoriaByIdService,
  createCategoriaService,
  updateCategoriaService,
  deleteCategoriaService
};