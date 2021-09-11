//const atendimentos = require("../../controllers/atendimentos");
const moment = require("moment");
const conexao = require("../infraestrutura/conexao");

class Atendimento {
  adiciona(atendimentoRecebido) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimentoRecebido.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );
    const atendimentoDatado = { ...atendimentoRecebido, dataCriacao, data };
    const sql = "INSERT INTO Atendimentos SET ?";
    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}
module.exports = new Atendimento();
