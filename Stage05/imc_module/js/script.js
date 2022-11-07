import { Modal } from './modal.js'

const form = document.querySelector('form'); 
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const resultIMC = bmiCalculation(weight, height);
  const message = `Seu IMC é de ${resultIMC}`;

  Modal.message.innerText = message;
  Modal.open();
}

function bmiCalculation(weight, height){
  let resBMI = (weight/((height / 100) ** 2)).toFixed(2);
  return resBMI;
}