/**
 * 
 * Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
 * 
 * "Paciente X possui o IMC de: Y"
 * 
 * Onde X é o nome do paciente e Y é o IMC desse paciente
 * 
 * Crie uma função para fazer o cálculo de IMC
 * 
 */


 let patientList = [];
 let option;
 
 function startup(){
   option = Number(prompt(`
   Selecione uma das opções abaixo:
   1. Cadastrar paciente.
   2. Exibir lista de pacientes.
   3. Apagar toda aa base de dados.
   4. Encerrar aplicação.
   `));
   menuSwitch(option);
 }
 
 function menuSwitch(menuOption){
   switch(menuOption){
     case 0:
       break;
     case 1: // cadastrar paciente
       registerPatient();
       startup();
       break;
     case 2: //Exibir a lista
       viewPatientList();
       startup();
      break;
     case 3: //Apagar toda aa base de dados.
       cleanUpDataBase()
       startup();
       break;
     case 4: //Encerrar aplicação.
      break;
     default:
       alert("Cara, não tem a opção que você escolheu.");
       startup();
       break;
     }
 }
 
 
 function registerPatient(){
 
   let patient = {};
   let name = prompt("Informe o nome do paciente.");
   let age = Number(prompt("Informe a idade do vivente."));
   let weight = Number(prompt("Informe o peso do animal (Kg)."));
   let height = Number(prompt("Informe a altura do anão (metro)."));
 
   if(name == "" || age == "" || weight == "" || height == ""){
     alert("Todos os campos são obrigatórios");
     return;
   }
 
   patient = {
     name: name,
     age: age,
     weight: weight,
     height: height,
     bmi: bmiCalculation(weight, height)
   }
 
   patientList.push(patient);
 
 }
 
 function viewPatientList(){
 
   let viewData = [];
   let filter;
 
   if(patientList.length === 0){
     alert("Não há nenhum paciente cadastrado.") 
     return;
   }
 
   filter = Number(prompt(`
   Filtro:
   1. Só o nome.    
   2. Tudo.
   `));
 
   switch(filter){
     case 1:
       for(let patient of patientList){ //for...of
         viewData.push(patient.name);
       }
       alert(`Nome dos pacientes: \n ${viewData.join("\n")}`)
       break;
     case 2:
       for (let patient of patientList){ //for...of
         viewData.push(`${patient.name}, ${patient.age}, ${patient.weight}, ${patient.height}, ${patient.bmi}`);
       }
       alert(`Nome, Idade, Peso, Altura, IMC \n ${viewData.join("\n")}`)
       break;
     default:
       alert("Opção inválida");
       break;
   }
 
 
 }
 
 function cleanUpDataBase(){
   patientList = [];
   if(patientList.length === 0){
     alert("Base de dados excluída com sucesso.");
   }else{
     alert("Erro ao excluir a base de dados.");
   }
 }

 function bmiCalculation(weight, height){
    let resBMI = (weight/(height ** 2)).toFixed(2);
    return resBMI;
 }
 
 startup();