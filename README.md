# Market-place-nodejs

Codigo desenvolvido em JavaScript
![NodeJS](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png "NodeJS")

## Instalação

1. Baixe o codigo
2. Abra o terminal do vs code
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Todos os endpoints da aplicação serão listado abaixo

### Usuario

### /findById


| Codigo | Resposta                                                      |
| -------- | --------------------------------------------------------------- |
| 200    | Retorna um usuário valido                                    |
| 400    | Retorna uma mensagem informando o erro                        |
| 401    | Unauthorized, Erro de autenticação, problemas com o token.  |
| 404    | Retorna uma mensagem informando que não encontrou o usuário |
| 500    | Internal Server Error, alguma coisa deu errado no servidor    |

Trecho do codigo do controller findByID

````


const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(req.params.id);

    console.log(user);

    if (!user) {
      res
        .status(404)
        .send({ message: `Usuario não encontrado, tente novamente` });
    }
    res.status(200).send(user);
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
````

### Produto

Todos os endpoints do produto listado abaixo
