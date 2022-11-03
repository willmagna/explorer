

// ########## Function expression ##########
// ########## Function anonymous ##########

/*
const sum = function(n1, n2){
  console.log(n1 + n2);
}

sum(2,3);

const sum = (n1, n2) => {
  console.log(n1 + n2);
}

sum(8,1);
*/
/*

ISSO É IGUAL

const sum = function(n1, n2) {}

A ISSO

const sum = (n1, n2) => {}


*/

/**
 * 
 * ARROW FUNCTION
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 */


//Quando uma função não tem o RETURN declarado, a função retorn undefinied


// ####### Callback function #######

/*
function sayMyName(name) {
  console.log(name);
}

sayMyName(
  () => {
    console.log('William')
  }
)

sayMyName('william')
sayMyName({name: 'william'})
sayMyName([1, 3, 6, 8])

function sayMyName(name){
  console.log('antes de executar a função callback');
  
  name();
  
  console.log('depois de executar a callback');
}

sayMyName(
  () => {
    console.log('estou em uma callback');
  }
  )

*/

// ########## Funções construturas ##########

/**
 * Function() constructor
 * 
 * expressão new
 * criar um novo objeto
 * this keyword
 */

function Person(name){
  this.name = name;
  this.walk = function(){
    return this.name + " está andando";
  }

}

const william = new Person('William');
const myak = new Person('Myak');

console.log(william);
console.log(william.name);
console.log(william.walk());

console.log(myak);
console.log(myak.name);
console.log(myak.walk());


let nome = new String("William"); //A função String guarda os caracteres em forma de array.
console.log(nome);
console.log(nome[0]);


let data = new Date();
console.log(data);