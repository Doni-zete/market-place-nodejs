const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, require: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  endereco: [
    {
      rua: { type: String, required: true },
      numero: { type: String, required: true },
      complemento: { type: String, required: true },
      CEP: { type: String, required: true },
      createdAt: { type: Date, required: true },
    },
  ],
  creadAt: { type: Date, required: true,default:Date.now()  },
  produtos_fav: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "produtos",
        creadAt: { type: Date, required: true },
      },
    },
  ],
  admin: { type: Boolean, required: true, default: false },
});


const Usuario = mongoose.model("usuarios",UsuarioSchema)
module.exports = Usuario;