let randomNumber = Math.floor(Math.random() * 11);
let count = 0;

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");


console.log(`Ramdom ${randomNumber}`);


//A moral de passar uma função como parâmetro é, só depois que 
//a pessoa clicar é que a função que foi como parâmentro vai ser executada.
//aqui ta adicionando tbm o onclick nos elementos porque é boa práatica
//não colocar eventos de JS no HTML
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', playAgain);
document.addEventListener('keydown', handleKeyDown);


function handleTryClick(event){

  event.preventDefault();

  let inputNumber = (document.querySelector('#inputNumber')).value;

  
  if(inputNumber == ""){
    alert("Preencha o campo com um número entre 0 e 10.");
    return;
  }
  
  inputNumber = Number(inputNumber);
  count++;

  if(inputNumber === randomNumber){

    toggleScreen();
/*    document.querySelector(".screen2 h2").innerText = `Acertou depois de ${count} ${count > 1 ? "tentativas." : "tentativa."}`;*/

    screen2.querySelector("h2").innerText = `Acertou depois de ${count} ${count > 1 ? "tentativas." : "tentativa."}`;

    //na variável screen2 foi atrabuida exatamente o elemento screen2, ou seja, não precisa mais acessar o .screen2 h2. Acessa direto o elemento dentro do nó .screen2.

  }else{
    alert(`Errouuuuuuu, tente novamente.`);
  }
  
  document.querySelector("#inputNumber").value = "";
  console.log(`ramdom ${randomNumber}`);

}

function playAgain() {

  toggleScreen();

  count = 0;
  randomNumber = Math.floor(Math.random() * 11);
  document.querySelector("#inputNumber").value = "";

}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleKeyDown(event){
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    playAgain();
  }
}

