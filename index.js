const cunstomExpress = require("./config/cunstomExpress");

const app = cunstomExpress();

// acessar rota _-> dar retorno
app.listen(3000, () => console.log(" Servidor rodando na porta 3000"));
//(req))recebendo (res) mandando
