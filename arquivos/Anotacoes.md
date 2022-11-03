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