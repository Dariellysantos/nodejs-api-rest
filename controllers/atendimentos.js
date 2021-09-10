const Atendimento = require("../projeto/models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    res.send("você está na rota de atendimentos e está realizando um GET")
  );

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento);
    res.send("post atendimento");
  });
};
