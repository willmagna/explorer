/**
 * 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
- nome;
- nota da primeira prova;
- nota da segunda prova.


Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


 * 
 */


let studentList = [];
let option;

function calcStudentAverage(firstGrade, secondGrade){
  return (firstGrade + secosndGrade)/2;
}

function registerStudent(){
  let student = {};
  let studentName = prompt("Digite o nome do aluno");
  let studentGradeOne = Number(prompt("Digite a nota da primeira prova"));
  let studentGradeTwo = Number(prompt("Digite a nota da segunda prova"));

  if(studentName == "" || studentGradeOne == "" || studentGradeTwo == ""){
    alert("O preenchimento de todos os campos é obrigatório!");
    return;
  }

  student = {
    name : studentName,
    gradeOne : studentGradeOne,
    gradeTwo : studentGradeTwo,
    avgGrade : calcStudentAverage(studentGradeOne, studentGradeTwo)
  }

  studentList.push(student);

  console.log(student);
  console.log(studentList);

}

function cleanUpStudentList(){

  if(studentList.length == 0){
    alert("A lista já está limpa.");
    return;
  }

  studentList = [];
  if(studentList.length == 0){
    alert("Lista de alunos deletada com sucesso.");
  }else{
    alert("Erro ao tentar deletar a lista de alunos.")
  }
}

function viewStudentList(){

  if(studentList.length == 0){
    alert("Não há alunos cadastrados.");
    return;
  }

  let viewStudentList = [];

  for(let student of studentList){
    viewStudentList.push(`${student.name}, ${student.avgGrade}, ${student.avgGrade >= 7 ? "Sim" : "Não"}`);
  }

  alert(`NOME, NOTA, PASSOU?\n${viewStudentList.join("\n")}`)
}

function switchMenu(menuOption){

  switch(menuOption){
    case 0:
      break;
    case 1: //Cadastrar aluno e nota.
      registerStudent();
      startup();
      break;
    case 2: //Exigir a lista de alunos com suas notas.
      viewStudentList();
      startup();
      break;
    case 3: //Excluir lista de alunos.
      cleanUpStudentList();
      startup();
      break;
    case 4: //Sair da aplicação
      break;
    default:
      alert("Favor digitar uma opção válida.");
      startup();
      break;
  }

}

function startup(){
  option = Number(prompt(`
  Escolha uma das opções abaixo:
  1. Cadastrar aluno e nota.
  2. Exigir a lista de alunos com suas notas.
  3. Excluir lista de alunos.
  4. Sair da aplicação
  `));
  switchMenu(option);
}



startup();