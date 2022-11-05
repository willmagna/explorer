let randomNumber = Math.floor(Math.random() * 11);
let count = 0;

console.log(`Ramdom ${randomNumber}`);

function handleClick(event){

  event.preventDefault();

  let inputNumber = (document.querySelector('#inputNumber')).value;

  
  if(inputNumber == ""){
    alert("Preencha o campo com um número entre 0 e 10.");
    return;
  }
  
  inputNumber = Number(inputNumber);
  count++;

  if(inputNumber === randomNumber){

    document.querySelector(".screen1").classList.toggle("hide");
    document.querySelector(".screen2").classList.toggle("hide");

    document.querySelector(".screen2 h2").innerText = `Acertou depois de ${count} ${count > 1 ? "Tentativas" : "Tentativa"}`;

  }else{
    alert(`Errouuuuuuu, tente novamente.`);
  }
  
  console.log(`ramdom ${randomNumber}`);

}

function playAgain() {

  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");

  randomNumber = Math.floor(Math.random() * 11);
  count = 0;

  document.querySelector("#inputNumber").value = "";

}


