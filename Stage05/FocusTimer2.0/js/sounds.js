export default function() {
  const forest = new Audio("https://github.com/willmagna/explorer/blob/main/Stage05/FocusTimer2.0/audio/Floresta.wav?raw=true");
  const rain = new Audio("https://github.com/willmagna/explorer/blob/main/Stage05/FocusTimer2.0/audio/Chuva.wav?raw=true");
  const coffeeShop = new Audio("https://github.com/willmagna/explorer/blob/main/Stage05/FocusTimer2.0/audio/Cafeteria.wav?raw=true");
  const firePlace = new Audio("https://github.com/willmagna/explorer/blob/main/Stage05/FocusTimer2.0/audio/Lareira.wav?raw=true");
  
  function playButtonForest(){
    forest.play();
  }
  
  function pauseButtonForest(){
    forest.pause();
  }

  function playButtonRain(){
    rain.play();
  }
  
  function pauseButtonRain(){
    rain.pause();
  }

  function playButtonCoffeeShop(){
    coffeeShop.play();
  }
  
  function pauseButtonCoffeeShop(){
    coffeeShop.pause();
  }

  function playButtonFirePlace(){
    firePlace.play();
  }
  
  function pauseButtonFirePlace(){
    firePlace.pause();
  }

  return {
    playButtonForest,
    pauseButtonForest,
    playButtonRain,
    pauseButtonRain,
    playButtonCoffeeShop,
    pauseButtonCoffeeShop,
    playButtonFirePlace,
    pauseButtonFirePlace
  }
  
}
