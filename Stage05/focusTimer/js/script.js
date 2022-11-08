const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

//Event-driven: a DOM é event-driven, ou seja, direcionada à eventos.
//Callback.
//Programação declarativa: Só falo o que deve ser feito.
//Programação imperativa: Falo como, o que deve ser feito.


function resetConstrols() {
  //programação declarativa
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');

}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2 , "0");
  secondsDisplay.textContent = String(seconds).padStart(2 , "0");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function countDown() {

  timerTimeOut = setTimeout( () => {

    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if(minutes <= 0) {
      resetConstrols();
      return;
    }

    if( seconds <= 0) {
      seconds = 2;
      --minutes;
    }
    
    updateTimerDisplay(minutes, String(seconds - 1));

    countDown();

  } , 1000 );
}

buttonPlay.addEventListener('click', () =>{
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  countDown(); //programação imperativa;

});

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener('click', () => {
  resetConstrols();
  resetTimer();
});

buttonSoundOn.addEventListener('click', hideUnHideSoundOnOff);

buttonSoundOff.addEventListener('click', hideUnHideSoundOnOff);

function hideUnHideSoundOnOff() {
  buttonSoundOn.classList.toggle('hide');
  buttonSoundOff.classList.toggle('hide');
}

buttonSet.addEventListener('click', () => {
  let newMinutes = prompt('Quantos minutos?');

  if(!newMinutes){
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
})
