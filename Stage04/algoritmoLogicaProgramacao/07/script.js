/**
 * 
 * Faça um programa que tenha um menu e apresente a seguinte mensagem:
 * 
 * Olá usuário! Digite o número da opção desejada
 * 
 *  1. Cadastrar um item na lista
 *  2. Mostrar itens cadastrados
 *  3. Sair do programa
 * 
 * ---
 * 
 * O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenártios:
 * 
 *  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
 *  Caso o usuário digite 2, ele poderá ver os itens cadastrados
 *    Se não houver nenhum item cadastrado, mostrar a mensagem: "Não existem itens cadastrados"
 *  Caso o usuário digite 3, a aplicação deverá ser encerrada.
 * 
 */

let option = null;
let itemsList = [];
let amountList = null;

function startup(){
  option = Number(prompt(`
  Olá! Digite o número da opção desejada: 
  1. Cadastrar items na lista.
  2. Mostrar itens cadastrados.
  3. Limpar a lista.
  4. Sair do programa.`));
  menuSwitch(option);
}

function registerItems(){
  for(i=0; i<amountList; i++){
    itemsList.push(prompt(`Digite o item número ${i+1} da lista`));
  }
}

function showItemsList(){
  if(itemsList.length === 0){
    alert("Não existem itens cadastrados.");
  }else{
    alert(itemsList.join(", "));
  }
}

function cleanUpItemsList(){
  itemsList = [];
  if(itemsList.length === 0){
    alert("Lista limpa com sucesso.");
  }else{
    alert("Deu erro ao tentar limpar a lista.");
  }
}

function menuSwitch(switchOption){
  switch (switchOption) {
    case 0:
      break;
    case 1:
      amountList = Number(prompt("Quantos items deseja cadastrar na lista?"));
      registerItems();
      startup();
      break;
    case 2:
      showItemsList();
      startup();
      break;
    case 3:
      cleanUpItemsList();
      startup();
      break;
    case 4:
      alert("Aplicação encerrada");
      break;
    default:
      alert("Opção inválida, encerrando aplicação");
      break;
    }
}
    

startup();