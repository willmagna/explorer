export function notANumber(value){
  return isNaN(value) || value == "";
}

export function bmiCalculation(weight, height){
  let resBMI = (weight/((height / 100) ** 2)).toFixed(2);
  return resBMI;
}