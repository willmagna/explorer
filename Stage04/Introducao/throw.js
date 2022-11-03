// throw
// Função registrada na memória

function sayMyName(name = '') {
  if(name === ''){
    throw 'Nome é obrigatório';
  } //aqui para a execução

  console.log('depois do erro');

}


// try... catch
// Aqui chama a função

try{
  sayMyName();
} catch(e) {
  console.log(e);
}


console.log('após a função de erro');

//por causa do throw... try/catch a aplicação continua sendo executada.