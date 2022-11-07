const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

// Event-driven: a DOM é event-driven, ou seja, direcionada à eventos.
// programação imperativa
// callback
buttonPlay.addEventListener('click', () =>{
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');
});

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
});

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
})

buttonSoundOn.addEventListener('click', hideUnHideSoundOnOff);

buttonSoundOff.addEventListener('click', hideUnHideSoundOnOff);

function hideUnHideSoundOnOff() {
  buttonSoundOn.classList.toggle('hide');
  buttonSoundOff.classList.toggle('hide');
}
