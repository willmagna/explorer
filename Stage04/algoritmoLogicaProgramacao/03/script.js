/**
 * 
 * Capturar 2 números
 * e fazer as operações matemáticas
 * de soma, subtração, multiplicação, divisão e resto da divisão.
 *
 * E para cada operação, mostrar um alerta com o resultado 
 */

let firstNumber = Number(prompt("Digite o primeiro número"));
let operador = prompt("Operador aritmético"); //o prompt retorna uma string
let secondNumber = Number(prompt("Digite o segundo número"));
let result = 0;
let checkDefault = false;

switch(operador){
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
  break;
  case "*":
    result = firstNumber * secondNumber;
  break;
  case "%":
    result = firstNumber % secondNumber;
    break;
  case "**":
    result = firstNumber ** secondNumber;
   break;
  default:
    checkDefault = true;
}

if(!checkDefault){
  alert(`O resultado é ${result}`);
}else{
  alert(`O operador aritmético é desconhecido ou deu merda, papai`);
}