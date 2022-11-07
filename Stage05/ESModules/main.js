// ######### Import * as #########
import * as calculator from './utils.js'

console.log(calculator.sum(1,3));
console.log(calculator.subtract(1,3));
console.log(calculator.multiply(1,3));
console.log(calculator.divide(1,3));

// ###############################################################


/*
// ######### Import as #########

import {sum as soma} from './utils.js';

console.log(soma(1,2));
*/
// ###############################################################


/*
// ######### MISTO (named e default) #########

import funcaoPadrao, { date, greeting } from './utils.js'

console.log(funcaoPadrao('William'));

console.log(date);
console.log(greeting('will.magna'));

*/
// ###############################################################

/*
// ######### NAMED EXPORT #########

import {today, double} from './utils.js';
console.log(today);
console.log(double(3));
*/
/*
import {message, text} from './utils.js';
console.log(message, text);
*/

// ###############################################################


/* ######### DEFAULT IMPORT E EXPORT #########
import qualquerNome from './utils.js';

console.log(qualquerNome);

//console.log(qualquerNome());
*/