const express = require("express");
const app = express();

//Route Params : 
//No route os parametros são obrigatórios. Ele faz parte do endereço.
//Chamada: http://localhost:3333/message/5/Will

app.get("/message/:id/:user", (request, response) => {

  const { id, user } = request.params; //desestruturar

  response.send(`
  Mensagem ID: ${id}. <br/>
  Para o usuário: ${user}
  `);

});

//Query params
//No query os parametros não são obrigatórios
//Chamada: http://localhost:3333/users?page=1&limit=123

app.get("/users", (request, response) => {

  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}`);

});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));