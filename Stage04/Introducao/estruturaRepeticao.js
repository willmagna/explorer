// ################ for...of ################
// serve tanto para strings quanto para arrays
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of

/*

let name = "William";
let names = ['William', 'Myak', 'Julia']

for(let char of name) {
  console.log(char)
}

for(let name of names) {
  console.log(name);
}

*/


// ################ for...in ################
// Cria um loop em cima de um objeto, pegando os atributos de um objeto.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in


let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for (let property in person){
  console.log(property);

  //para acessar as propriedades de person
  // método 1
    //console.log(person["name"]);
  // método 2
    //console.log(person.name);
  // método 3
  console.log(person[property]);
}
