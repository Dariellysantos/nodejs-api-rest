const express = require("express");

const app = express();
// acessar rota _-> dar retorno
app.listen(3000, () => console.log(" Servidor rodando na porta 3000"));
//(req))recebendo (res) mandando
app.get("/atendimentos", (req, res) =>
  res.send("você está na rota de atendimentos e está realizando um GET")
);
