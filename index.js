const express = require("express");
const connectToDatabase = require("./src/database/database");
// importando a rotas
const usuario = require("./src/router/usuario.router")

const app = express();
const port = 3000;

app.use(express.json());

app.use("/usuario", usuario)

connectToDatabase()

app.get("/", (req, res) => {
  res.send({
    message: "Bem vindo ao nosso market-place",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
