/**
 * 
 * Capture 10 items para compor a lista de um supermercado.
 * 
 * Após capturar os 10 items, imprima-os, separando por virgula.
 * 
 */

let list = [];

for(i=1; i<=10; i++){
  list.push(prompt(`Insira o item da lista número ${i}`));
}

console.log(list.join(", "));
alert(list.join(", "));