/**
 * 
 * ############ Jogo da advinhação ############
 * 
 * 
 * Apresente a mensagem ao usuário:
 * "Adivinhe o número que estou pensando? Está entre 0 e 10"
 * 
 * Crie uma lógica para gerar um número aleatório
 * e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.
 * 
 * enquanto o usuário não adivinha o número, mostrar a mensagem:
 * "Erro, tente novamente"
 * 
 * 
 * Caso o usuário acerte o número, apresentar a mensagem:
 * 
 * "Parabéns! Você advinhou o número em x tentarivas"
 * 
 * Substitua o "x" da mensagem, pelo numero de tentativas
 * 
 */

let numberInput;
let hit = false;
let tryCount = 0;

let randomNumber = Math.floor(Math.random() * 11); //// Returns a random integer from 0 to 10:

//console.log(`Ramdom number ${randomNumber}`);

while(!hit){

  tryCount++;
  
  numberInput = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
  if(numberInput === null) break;
  numberInput = Number(numberInput);
  
  if(numberInput === randomNumber){
    alert(`Parabéns! Você advinhou o número em ${tryCount} tentarivas`)
    hit = true;
  }else{
    alert(`Errouuuuuuu, tente novamente`);
    hit = false;
  }

  //console.log(`TryCount: ${tryCount}`);
  //console.log(`Hit: ${hit}`);

}
