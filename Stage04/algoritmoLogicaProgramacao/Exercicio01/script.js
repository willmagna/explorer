/**
 * 
 Bora praticar e rever tudo o que foi ensinado na aula? 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;


Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

 */

let numberOne = Number(prompt("Insira o primeiro número"));
let numberTwo = Number(prompt("Insira o segundo número"));

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let restOfDivision = numberOne % numberTwo;

alert(`
  O resultado das operações dos 2 números são:
  Soma: ${sum}
  Subtração? ${subtraction}
  Multiplicação: ${multiplication}
  Divisão: ${division}
  Resto da divisão: ${restOfDivision}
  A soma dos 2 número é ${sum%2 ? "Impar" : "Par"}
  Os 2 números digitados são iguais? ${numberOne == numberTwo ? "Sim" : "Não"}
`);