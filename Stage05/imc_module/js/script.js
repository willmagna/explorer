import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { notANumber, bmiCalculation } from './utils.js';

const form = document.querySelector('form'); 
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const resultIMC = bmiCalculation(weight, height);
  displayResultMessage(resultIMC);
  
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

// Fechar a janela de eroo ao gisitar no campo
// evento é de nome input
//inputWeight.onfocus = (event) => AlertError.close();
//inputHeight.onfocus = (event) => AlertError.close();

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
