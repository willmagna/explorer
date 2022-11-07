/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 */

// ######### Import * as #########

/*export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => a / b;*/
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

// ou

export {sum, multiply, subtract, divide};

// ###############################################################


/*
// ######### Import as #########

export function sum(a, b){
  return a + b;
}
*/
// ###############################################################


/*
// ######### MISTO (named e default) #########

const date = new Date();
const greeting = (name) => `Hello ${name}`;

export default function (argument) {
  console.log(date, greeting(argument));
}

export { date, greeting };
*/
// ###############################################################

/*
// ######### NAMED EXPORT #########

export const today = Date.now();

const double = (number) => number * 2;
export {double};
*/
/*
const text = "text";
const message = "outra mensagem";
export { text, message };
*/

// ###############################################################

/* ######### DEFAULT IMPORT E EXPORT #########

//OBS.: Somente 1 default por arquivo.

const message = 'omg in variables'
export default message;

/*
export default "jkashdflkjahsdf";
*/

/*
export default function() {
  return 'ola';
}
*/
