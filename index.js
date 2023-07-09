const express = require("express");
const connectToDatabase = require("./src/database/database");//arquivo de conexao com o banco
// importando a rotas
const usuario = require("./src/router/usuario.router")//arquivo de rota do usuario
const auth = require("./src/router/auth.router")//arquivo de rota do usuario


const app = express();
const port = 3000;

app.use(express.json());

app.use("/usuario", usuario)//chamando as rotas usuario
app.use("/auth", auth) //chamando as rotas auth


connectToDatabase() //conectadno com o banco

app.get("/", (req, res) => {
  res.send({
    message: "Bem vindo ao nosso market-place",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
