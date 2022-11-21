const express = require("express");
const app = express();

app.use(express.json()); //precisa dizer pra aplicação qual formato que o conteúdo virá, nesse caso JSON

app.post("/users", (request, response) => {

  const { name, email, password } = request.body;

  //SEND devolve no formato HTML
  //response.send(`Usuário: ${name} <br/> Email: ${email} <br/>Senha: ${password}`);

  //JSON devolve no formato JSON, como objeto
  //esse é o padrão mais conveniente pra utilizar nas respostas de uma API
  response.json( { name, email, password } );


});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));