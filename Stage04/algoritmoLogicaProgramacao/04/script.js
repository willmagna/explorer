/**
 * 
 * Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.
 * 
 * Se o aluno passou no bimestre, dar os parabéns.
 * 
 * Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.
 * 
 * 
 * Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
 * 
 */

 let name = prompt("Insira seu nome");
 let gradeOne = Number(prompt("Insira o nota do primeiro bimestre"));
 let gradeTwo = Number(prompt("Insira o nota do segundo bimestre"));
 let gradeThree = Number(prompt("Insira o nota do terceiro bimestre"));
 
 let resGrade = ((gradeOne + gradeTwo + gradeThree)/3).toFixed(2);
 
 if(resGrade >= 6){
   alert(`Parabéns ${name}, você sua nota é ${resGrade}. Você passou de ano.`);
 }else{
   alert(`ÉÉ.. ${name}, seu arrombado. Sua nota é ${resGrade}. Vai pra recuperação.`);
 }