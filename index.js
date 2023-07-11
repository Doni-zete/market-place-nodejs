const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco
// importando a rotas
const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota do categoria
const auth = require("./src/router/auth.router"); //arquivo de rota do usuario


const app = express();
const port = 3000;

app.use(express.json());

app.use("/usuario", usuario); //chamando as rotas usuario
app.use("/produto", produto); //chamando as rotas usuario
app.use("/categoria", categoria); //chamando as rotas categoria

app.use("/auth", auth); //chamando as rotas auth

connectToDatabase(); //conectadno com o banco

app.get("/", (req, res) => {
  res.send({
    message: "Bem vindo ao nosso market-place",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
