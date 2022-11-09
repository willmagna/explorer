import Controls from "./controls.js"; // Default import
import Timer from "./timer.js"; // named import

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

//Event-driven: a DOM é event-driven, ou seja, direcionada à eventos.
//Callback.
//Programação declarativa: Só falo o que deve ser feito.
//Programação imperativa: Falo como, o que deve ser feito.


buttonPlay.addEventListener('click', () =>{
  controls.play();
  timer.countDown(); //programação imperativa;

});

buttonPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
});

buttonStop.addEventListener('click', () => {
  controls.reset();
  timer.reset();
});

buttonSoundOn.addEventListener('click', () => {

});

buttonSoundOff.addEventListener('click', () => {

});

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes();

  if(!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
})
