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