import Sound from "./sounds.js";

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay,
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFirePlace,
  body
} from "./elements.js";

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
const sound = Sound();


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
      seconds = 60;
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

function play(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
}

function holdTimer(){
  clearTimeout(timerTimeOut);
}

function startTimer(){
  play();
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

  let resMinutes = Number(minutesDisplay.textContent) + 5;

  minutesDisplay.textContent = String(resMinutes).padStart(2, "0");
})

buttonDecrease.addEventListener('click', () => {

  let resMinutes = Number(minutesDisplay.textContent);

  if(resMinutes <= 5){
    resMinutes = Number(minutesDisplay.textContent) - 1; 
  }else{
    resMinutes = Number(minutesDisplay.textContent) - 5; 
  }

  if(resMinutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, "0");
    return;
  }

  minutesDisplay.textContent = String(resMinutes).padStart(2, "0");

})



buttonForest.addEventListener('click', () => {  

  clickSoundsButton(buttonForest);
  
  if(containsClass(buttonForest)){
    sound.playButtonForest();
  }else{
    sound.pauseButtonForest();
  }
  
})

buttonRain.addEventListener('click', () => {
  clickSoundsButton(buttonRain);

  if(containsClass(buttonRain)){
    sound.playButtonRain();
  }else{
    sound.pauseButtonRain();
  }

})

buttonCoffeeShop.addEventListener('click', () => {
  clickSoundsButton(buttonCoffeeShop);
  
  if(containsClass(buttonCoffeeShop)){
    sound.playButtonCoffeeShop();
  }else{
    sound.pauseButtonCoffeeShop();
  }

})

buttonFirePlace.addEventListener('click', () => {
  clickSoundsButton(buttonFirePlace);

  if(containsClass(buttonFirePlace)){
    sound.playButtonFirePlace();
  }else{
    sound.pauseButtonFirePlace();
  }


})

function clickSoundsButton(buttonName){
  buttonName.querySelector('svg :nth-child(1)').classList.toggle('bgButtonSoundsClicked');
  buttonName.querySelector('svg :nth-child(2)').classList.toggle('colorButtonSoundsClicked');
}

function unClickSoundsButton(buttonName){
  buttonName.querySelector('svg :nth-child(1)').classList.remove('bgButtonSoundsClicked');
  buttonName.querySelector('svg :nth-child(2)').classList.remove('colorButtonSoundsClicked');
}

function containsClass(buttonName){
  return buttonName.querySelector('svg :nth-child(1)').classList.contains('bgButtonSoundsClicked');
}


buttonLightMode.addEventListener('click', () => {
  buttonLightMode.classList.add('hide');
  buttonDarkMode.classList.remove('hide');

  body.className = "light-mode";
  lightMode();
  

})

buttonDarkMode.addEventListener('click', () => {
  buttonLightMode.classList.remove('hide');
  buttonDarkMode.classList.add('hide');

  body.className = "dark-mode";
  darkMode();
  

})

volumeForest.addEventListener('click', () => {
  sound.volumeForest(volumeForest.value);
})
volumeRain.addEventListener('click', () => {
  sound.volumeRain(volumeRain.value);
})
volumeCoffeeShop.addEventListener('click', () => {
  sound.volumeCoffeeShop(volumeCoffeeShop.value);
})

volumeFirePlace.addEventListener('click', () => {
  sound.volumeFirePlace(volumeFirePlace.value);
})

function darkMode(){
  document.querySelector('.play svg :nth-child(1)').classList.add('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(1)').classList.add('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(2)').classList.add('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(3)').classList.add('dark-mode-fill')
  document.querySelector('.stop svg :nth-child(1)').classList.add('dark-mode-fill')
  document.querySelector('.increase svg :nth-child(1)').classList.add('dark-mode-fill')
  document.querySelector('.decrease svg :nth-child(1)').classList.add('dark-mode-fill')
}

function lightMode(){
  document.querySelector('.play svg :nth-child(1)').classList.remove('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(1)').classList.remove('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(2)').classList.remove('dark-mode-fill')
  document.querySelector('.pause svg :nth-child(3)').classList.remove('dark-mode-fill')
  document.querySelector('.stop svg :nth-child(1)').classList.remove('dark-mode-fill')
  document.querySelector('.increase svg :nth-child(1)').classList.remove('dark-mode-fill')
  document.querySelector('.decrease svg :nth-child(1)').classList.remove('dark-mode-fill')
}