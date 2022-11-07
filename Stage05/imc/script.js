//variáveis - variables

const form = document.querySelector('form'); //querySelector -> Pesquisa de seletor como se fosse CSS
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.modal .title span');
//const modalBtnClose = document.querySelector('.modal button.close');

//object literals 
const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

// <form onsubmit=''> da pra fazer isso no HTML, mas como boas práticas
// deixa essa responsabilidade pro script, que vem logo a seguir.
// 3 Maneiras de crair e atribuir funcção a um evento:
/*
1º) form.onsubmit = function() {}

2º) form.onsubmit = () => {}

3º) form.onsubmit = handleSubmit();
    function handleSubmit() {}
*/

form.onsubmit = (event) => {
  event.preventDefault(); //evita o comportamento padrão do navegador de enviar os dados e carregar a página automaticamente.
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const resultIMC = bmiCalculation(weight, height);
  const message = `Seu IMC é de ${resultIMC}`;

  Modal.message.innerText = message;
  Modal.open();
}

Modal.buttonClose.onclick = () => {
  Modal.close();
}

function bmiCalculation(weight, height){
  let resBMI = (weight/((height / 100) ** 2)).toFixed(2);
  return resBMI;
}