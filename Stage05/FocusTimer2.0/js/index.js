const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');


const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const buttonFirePlace = document.querySelector('.firePlace');


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
})


buttonPause.addEventListener('click', () => {
  alert('pause');
})

buttonStop.addEventListener('click', () => {
  alert('stop');
})

buttonIncrease.addEventListener('click', () => {
  alert('Increase');
})

buttonDecrease.addEventListener('click', () => {
  alert('Descrease');
})

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