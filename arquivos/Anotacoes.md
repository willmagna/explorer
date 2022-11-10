# Tipos de dados

  Conforme o ECMAScript standard temos 9 tipos de dados:

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

  * Data types
   * Primitive / Primitive valuw
    * Structural
    * Structural Primitive

  ## Primitivos

  *  String
  * Number
  * Boolean
  * undefined
  *  Symbol
  * BigInt

  ## Estruturais

  * Object
   * Array
   * Map
   * Set
   * Date
   * ...

  * Function

  ## Primitivo Estrutural / Structural Root Primitive

  * Null

  ## Variáveis

  ## Scope
  * Escopo determina a visibilidade de alguma variável no JS


# FUNCTIONS

  * Quando uma função não tem o RETURN declarado, a função retorn undefinied
  * Quando vc faz uma função em maneira de expressão ela não sofre hoisting (elevação)
  * Função é um tipo de dado

  * Executar função dentro de um array
    arrayName[]();

  * Executar função dentro de um objeto
    objectName.functionName();

  ## Função autoexecutavel
    * (function () {
      console.log('alo')
    })()

  ## Arrow Function

   * Função do tipo expression

   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

    Isso é igual a
     * const sum = function(n1, n2) {}
    Isso:
     * const sum = (n1, n2) => {}

    * const sayMyName = function() {}
    * cont sayMyName = () => {}

  ## Function() constructor
    * Expressão new
    * Criar um novo objeto
    * this keyword

    * let william = new Person("William");

# Prototype
  * prototype-based language
  * prototype chain
  * __proto__

# Expressões e Operadores
  * Expressions
  * Operators
    * Binary
    * Unary
    * Ternary

# New
  * left-hand-side expression
  * criar um novo objeto

# Operadores unários
  * typeof
  * delete
    * pode deletar um atributo do objeto.


# Operadores Aritméticos
  * Multiplicação
  * Divisão
  * Soma
  * Subtração

  * Resto da divisão
  * Incremento
  * Decremento
  * Exponencial


* FALSY

  Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops). Typecasting.

  * false
  * 0 
  * -0
  * ""
  * null
  * undefined
  * NaN

* TRUTHY
  Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops). Typecasting.

  * true
  * {}
  * []
  * 1
  * 3.23
  * "0"
  * "false"
  * -1
  * Infinity
  * -Infinity

# Operator precedence
  Precedência de operadores

  Mais importante
  
  * grouping                    ()
  * negação e incremento        ! ++ --
  * multiplicação e divisão     * /
  * adição e subtração          + - 
  * relacional                  < <= > >= 
  * igualdade                   == != === !==
  * AND                         &&
  * OR                          ||
  * condicional                 ?:
  * assignment (atribuição)     = += -= *=

  Menos importante

# Estruturas de repetição
  ## for of
    * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
    * exemplos: stage04/introducao/estruturaRepeticao.js
  ## for in
    * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
    * exemplos: stage04/introducao/estruturaRepeticao.js



# Melhorando os algoritmos e a lógica de programação
  ## Lógica de programação
  ## Entendendo problemas
  ## Pensamento crítico e lógico

  1. Pensar
    * É necessário tempo para pensar
    * Para quem está começando, esse tempo é maior
    * É necessário evitar interrupções
    * Para quem não treinou o foco, é muito fácil ser interrompido

  2. Questionar e entender
    * Com as melhores perguntas, vem as melhores respostas
    * Para entender o problema, precisamos continiar perguntando até encontrar a solução
    * Para entender, precisamos aprender a ler e interpretar o problema

  3. Praticar
    * Quanto mais praticar, melhor vai ficar
    * Vai levar tempo! Por isso, será necessário paciência no processo. Quebrar o problema em pequenaos pedaços, e colocar no código

  4. Estrutura de dados e Algoritmos (conceitos teóricos)
    * Algoritmos é a sequência de passos para completar uma tarefa
    * É tudo sobre dados. Como manipular eles, como guardar eles, como capturar eles.

  5. Ver código
    * Você precisa ver código;
    * Tentar entender código dos outros;
    * Aprenderemos outras maneiras de pensar no problema;


# Estrutura de daods
- Organização e gerenciamento dos dados
- Melhor eficiência do código

[] Estruturas de repetição
[] Vetores (Arrays)

  ## Arrays


//adicionar um item no fim: .push("");
//adicionar no começo: .unshift("");
//remover do fim: .pop();
//remover do começo: .shift();
// pegar somente alguns elementos do array: .slice(1, 3));
// remover 1 ou mais items em qualquer posição do array: .splice(1, 2);
// encontrar a posicção de um elemento no array: .indexOf('css');


# Aperfeiçoando a resolução de problemas

Perguntas a serem feitas:

1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal?
4. Qual(is) o(s) caminho(s) alternativo(s)?
5. Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)


# Ferramentas da linguagem que abordaremos

[] loop while
[] arrays e funções de arrays
[] condicional switch e if/else
[] template literals (string)


# Estrutura de dados
  1. Array
    const myArray = [1, 2, "a", "b", true];
  
  2. Object
    const myObject = { property: "value" };

# Funções

  1. Named

    function myFunction() {}

  2. Anonymous

    const myFunction = function() {}

  3. Arrow

    const myFunction = () => {}

  4. Arguments & return

    function sum(a, b){
      return a+b;
    }
  
    const sum = (a, b) => a + b;

  //Execução
    myFunction();
    const mySum = sum(1, 2);
  

# Estrutura de repetição

1. while

  let play = true
  while(play){}

2. for (tradicional)

  let text = "abc";
  for(let i=0; i < text.length; i++){
    alert(text[i]);
  }  

3. for...of

  for(let char of text){
    alert(char)
  }


# DOM (Document Object Model)
* Document Object Model
  - Modelagem do documento como objeto JavaScript
* Representação do HTML em objetos JavaScript
  - Atributos (propriedades) e métodos (funcionalidades)
* Criado pelo navegador (browser)
  - É uma interface (API) usada no navegador
  - A DOM é uma API (Application programming interface)

Para que serve?

* Javascript usa a DOM para se conectar ao HTML
  - DOM não é o JavaScript
  - A DOM é a repressentação do HTML em formato de um objeto JavaScript

* Manipular o HTML com Javascript
  - Modificar o HTML, os estilos e até disparar ações

## Dev Tools
Através das ferramentas do desenvolvedor Det Tools, observaremos a DOM.
* window
  - Objeto global presente em qualquer página no navegador
* document
  - Representação do documento

## Element e Node
As tags HTML, quando usadas pela DOM, podemos chamar de node (nó) ou de element (elemento).

O elemento é a representação do HTML ele é um objeto tbm.

## Recebendo e modificando valores
Podemos pegar qualquer valor das tags e, também, alterar eles.

* innerText
  console.log(h1.innerText);

* innerHTML
  console.log(h1.innerHTML);
  
* alterando o texto (ou o HTML)
  h1.innerText = "Novo título";

## Alterando estilos
Podemos alterar estilos ou adicionar classes em elementos

* Alterando o estilo
  h1.style.backgroundColor = "Red";

* Adicionando Classes
  h1.classList.add('hide');

* Removendo Classes
  h1.classList.remove('hide');

* Alternando entre classes
  h1.classList.toggle('hide');

# Input
* Todo o input pega o valor através do value

# Event-driven
A DOM é direcionada a eventos event-drive. Significa que ela poderá reagir a qualquer tipo de evento relacionado à página.

* Podemos entender em 2 fases
  - A ocorrência do evento e reação à ocorrência

1. Eventos
  Ações que acontecem na página, site ou aplicação
  * Carregamento do documento, aparição de elementos na tela
  * Modificação de propriedades da página (largura, altura, scroll)
  * Cliques de mouse e digitação do teclado
  * Interação com sons, imagens, vídeos
  * Outros

2. Reações
  O sistema poderá executar reações às ações. Executar uma função sempre que determinada ação acontecer.

# ES Modules
* Sintaxe que entrou no JS no EcmaScript 6 (ES6)
* Disponibizar qualquer tipo de dado entre arquivos
* Separar código em diversos arquivos
* Isolar escopo e código

# JavaScript Eventes
## Onclick
  * onclick é a mesma coisa que: document.querySelector('nav a:nth-child(1)').addEventListener('click', () => {});