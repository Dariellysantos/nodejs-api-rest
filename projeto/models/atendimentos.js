//const atendimentos = require("../../controllers/atendimentos");
const moment = require("moment");
const atendimentos = require("../../controllers/atendimentos");
const conexao = require("../infraestrutura/conexao");

class Atendimento {
  adiciona(atendimentoRecebido, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimentoRecebido.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const dataEhvalida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimentoRecebido.cliente.length >= 5;

    const validacoes = [
      {
        nome: "data",
        valido: dataEhvalida,
        menssagem: "data deve ser maior ou igual a data atual.",
      },
      {
        nome: "cliente",
        valido: clienteEhValido,
        menssagem: "Cliente deve ter pelo ao menos 5 caracteres",
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      res;
      const atendimentoDatado = { ...atendimentoRecebido, dataCriacao, data };

      const sql = "INSERT INTO Atendimentos SET ?";

      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(atendimentoRecebido);
        }
      });
    }
  }

  lista(res) {
    const sql = "SELECT* FROM Atendimentos";
    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

    conexao.query(sql, (erro, resultados) => {
      const atendimentoRecebido = resultados[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(atendimentoRecebido);
      }
    });
  }

  alterar(id, valores, res) {
    if (valores.data) {
      valores.data = moment().format("YYYY-MM-DD HH:MM:SS");
    }
    const sql = "UPDATE Atendimentos SET ? WHERE id=?";

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }
  deleta(id, res) {
    const sql = "DELETE FROM Atendimentos WHERE id=?";

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}
module.exports = new Atendimento();
