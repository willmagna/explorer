// Criando objetos com o padrão Factory e injeção de dependências
// Estrutura de uma factory
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetConstrols,
}) { //desse jeito é como uma named 

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2 , "0");
    secondsDisplay.textContent = String(seconds).padStart(2 , "0");
  }
  
  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }
  
  function countDown() {
  
    timerTimeOut = setTimeout( () => {
  
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      updateDisplay(minutes, 0);
  
      if(minutes <= 0) {
        resetConstrols();
        return;
      }
  
      if( seconds <= 0) {
        seconds = 2;
        --minutes;
      }
      
      updateDisplay(minutes, String(seconds - 1));
  
      countDown();
  
    } , 1000 );
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }
  
  return {
    updateDisplay,
    countDown,
    reset,
    updateMinutes,
    hold
  };

}