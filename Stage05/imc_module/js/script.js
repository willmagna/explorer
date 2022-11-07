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

  const showAlertError = notANumber(weight) || notANumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const resultIMC = bmiCalculation(weight, height);
  const message = `Seu IMC é de ${resultIMC}`;

  Modal.message.innerText = message;
  Modal.open();
}
