const cunstomExpress = require("./config/cunstomExpress");

const conexao = require("./projeto/infraestrutura/conexao");
const tabelas = require("./projeto/infraestrutura/infraestrutura/tabelas");
const Tabelas = require("./projeto/infraestrutura/infraestrutura/tabelas");
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso");

    Tabelas.init(conexao);
    const app = cunstomExpress();
    // acessar rota _-> dar retorno
    app.listen(3000, () => console.log(" Servidor rodando na porta 3000"));
    //(req))recebendo (res) mandando
  }
});
