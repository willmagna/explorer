const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');


const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const buttonFirePlace = document.querySelector('.firePlace');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);


function countDown(){

  timerTimeOut = setTimeout(() => {

    let seconds = Number(secondsDisplay.textContent);
    let localMinutes = Number(minutesDisplay.textContent);
    let isFinished = localMinutes <= 0 && seconds <= 0;

    if(isFinished){
      resetTimer(minutes, 0);
      return;
    }

    if(seconds <= 0){
      seconds = 5;
      --localMinutes;
    }

    minutesDisplay.textContent = String(localMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    countDown();
    
  }, 1000);

}

function resetTimer(newMinutes, seconds){
  minutesDisplay.textContent = String(newMinutes).padStart(2 , "0");
  secondsDisplay.textContent = String(seconds).padStart(2 , "0");
  resetControls();
  holdTimer();
}

function resetControls(){
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
}

function playtimer(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
}

function holdTimer(){
  clearTimeout(timerTimeOut);
}

function startTimer(){
  playtimer();
  countDown();
}


buttonPlay.addEventListener('click', () => {
  startTimer();
})


buttonPause.addEventListener('click', () => {
  resetControls();
  holdTimer();
})

buttonStop.addEventListener('click', () => {
  resetTimer(minutes, 0);
})

buttonIncrease.addEventListener('click', () => {

  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
})

buttonDecrease.addEventListener('click', () => {

  let resMinutes = Number(minutesDisplay.textContent) - 5;

  if(resMinutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, "0");
    return;
  }
  minutesDisplay.textContent = String(resMinutes).padStart(2, "0");
})


/*
buttonForest.addEventListener('click', () => {  

  buttonForest.querySelector('svg :nth-child(1)').classList.add('bgButtonSoundsClicked');
  buttonForest.querySelector('svg :nth-child(2)').classList.add('colorButtonSoundsClicked');
  
})

buttonRain.addEventListener('click', () => {
  alert('Rain');

})

buttonCoffeeShop.addEventListener('click', () => {
  alert('CoffeeShop');
})

buttonFirePlace.addEventListener('click', () => {
  alert('FirePlace');
})

*/