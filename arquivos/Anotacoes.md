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



# Promisses
  * Conceito (assincronismo):
      console.log('inicio');
      setTimeout(() => console.log('executei'), 1000);
      console.log('fim');


* O NodeList é um array like. Ou seja, parece com um array.
  Se é um array like, vc tbm consegue algumas funcionalidades dos arrays

* Array:
  [].funções

* this
  - O this é pra acesar a variável "global" da classe, ou seja, é pra acessar o próprio atributo da classe.


# Git

## Entrar na pasta através do terminal e digitar
  - git init

## Definir nome e email
  - git config --global user.name "William"
  - git config --global user.email "williamlodea@gmail.com"
  - git config --list

## Ver todo o histórico de commits
  - git log 
  - git log --oneline
  - git log -n 3 (retorna os últimos 3 commits realizados)

## Estágios do arquivo
  1. Iniciamos o repositório
  2. Working Diretory
    (add)
  3. Stage Area
    (commit)
  4. Repository
  
## HEAD
A função do HEAD é apontar, mostrar qual foi o último commit que vc realizou
  - git log

## GIT DIFF
  - git diff

## Desfazendo modificações
  - git status
  ### Restaura arquivo específico
    - git restore index.html 
  ### Restaura tudo
    - git restore .
  - git status (pra conferir se tudo voltou como era antes da alteração)

## Restaurando da Staged
  Quando vc altera os arquivos e coloca na stage, ou seja, (git add .) e quer voltar como era antes.
  Ai ele volta pra working area.
  - git restore --staged index.html
  - git restore --staged .

## Corrigindo a mensagem último commit
  - git commit --amend -m "nova mensagem"

## Desfazendo o último commit
  - git reset --soft HEAD~1

## Git Ignore
  - Criar um arquivo com o nome: ".gitignore"
  - Ai os nomes dos arquivos que estiverem dentro dessa lista serão ignorados pelo git 
  - Boas práticas, sempre colocar a pasta "node_modules" dentro do .gitignore pq essa pasta não precisa commitar
  - Caso a pasta foi e depois vc ignorou ela ai vc precisa limpar a cache:
    - git rm -r --cached .
    - git add .
    - git commit -m "gitignore update"
    - git push

## Git Keep
  Pasta vazia o git entende como algo que não precisa ser rastreado
  - Adiciona o arquivo na pasta que vc quer que seja commitada mesmo vazia: .gitkeep
  - Não precisa escrever nada no arquivo .gitkeep

## Git clone
  Baixar o código atualizado pra trabalhar no computador de casa por exemplo
  - Copia o link ssh da pasta que esta no github
  - git clone git@github.com:willmagna/explorer.git

## Git pull
  Busca por atualizações no github e traz para o teu repositório local 
  - git remote --v


## README
  - Colocar na própria pasta do projeto
  - README.md tem que ser em caixa alta
  

# API
Application Programming Interface, ou interface de Programação de Aplicação é um termo para designar uma interface de comunicação que um sistema oferece para que outros acessem suas funções.

# Node.js
Não é uma linguagem de programação.
JS Runtime Enviroment (permite rodar JavaScript fora do navegador)
Ele é um ambiente que oferece recursos que permite escrever e executar aplicações Javascript.

## Para quê serve o Node.js?

Serve para fazer o que você quiser, desde sites à scripts de automação.
Incluindo, a criação de API.

## Onde o Node.js pode ser utilizado?
  - Backend
  - FrontEnd
  - Micro serviços
  - API
    - Web
    - Desktop
    - Mobile
  - Scripts e automações
  - IA
  - Machine Learning

# Iniciando um projeto Nodejs e Adicionando o Express
  - npm init -y 
  - npm install express --save
  - npm install nodemon --save-dev
  - npm run dev
  - npm install express-async-errors --save
  - npm install bcryptjs

# Estrutura inicial de um projeto
  - src
    - server.js
      * Ponto de entrada da aplicação

    - routes
      * Quando uma requisiçaõ chega no server, vai passar pelas rotas, para que seja identificado qual o controller que será executado, o que o usuário está pedindo.
      * Baseado na rota, no caminho, no endereço. A requisição será entregue para um determinado controller que é o controller que executará essa requisição e depois ele devolve para a rota e a rota sabe para quem ele tem que devolver através do server.js

    - controllers
      * É a camada, a parte responsável por processar  as requisições da aplicação.
      * É a parte inteligência da aplicação, onde há as regras de negócio da aplicação.
      * O controller é criado como uma classe
      * Porque cria-se classe e não apenas uma função? Pq a classe permite criar várias funções (métodos).

      * No Máximo 5 métodos. Boas práticas o controller terá no máximo 5 métodos:
        - index - GET para listar vários registros.
        - show - GET para exibir um registro específico.
        - create - POST para criar um registro.
        - update - PUT para atualizar um registro.
        - delete - DELETE para remover um registro

      * Você pode ou não colcoar um status code, do http code

    - utils
      * Deixar padrão o tratamento de exceção

    - database, sqlite, migrations

# Middleware
São funções que tem acesso ao objeto de solicitação (requisição), o objeto de resposta (resposta), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo.

A próxima função middleware é comumente denotada por uma variável chamada next.

## Middleware podem
  - Executar qualquer código;
  - Fazer mudanças nos objetos de solicitação e resposta;
  - Encerrar o ciclo de solicitação-resposta;
  - Chamar o próximo middleware na pilha.

# SQL
  * Instalar o sqlite
    - npm install sqlite3 sqlite --save (o --save serve pra dizer que é de produção)
  * Comandos DDL (Data Definition Language)
    - CREATE
    - DROP
    - ALTER
    
  * Comandos DML (Data Manipulation Language)
    - C -> Create -> INSERT
    - R -> Read -> SELECT
    - U -> Update -> UPDATE
    - D -> Delete -> DELETE


# Nullish coalescing operator (??)
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

# SQL Query Builder
Query Builder é um Construtor de Consulta.

O Query Builder permite que você construa instruções SQL independente do bando de dados utiliado.

O query builder gera o SQL específico para o banco de dados que está sendo utilizado.

# Instalando Knex.js
https://knexjs.org/#Installation-node
* Instalar:
  - npm install knex --save
* Configurar:
  - npx knex init

# Migrations
É uma forma de versionar a base de dados.
Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo.

## Métodos de uma Migrations
  * UP: método responsável por criar ou alterar algo no bando de dados.
  * DOWN: responsável pelo rollback. Ou seja, desfazer as alterações realizadas pela migration.

# NPM 
Node Package Manager é o gerenciador de pacotes padrão para Node.js.
Os pacotes e módulos necessários no projeto Node são instalados usando npm.
E também utilizamos o npm para executar scripts e bibliotecas instaladas.

# NPX
Node Package Execute, vem com o npm acima da versão 5.2.
É um executor de pacotes npm que pode executar qualquer pacote que você quiser do registro npm sem sequer instalar esse pacote.

## Em resumo
  * NPM é uma ferramenta que usa para instalar pacotes.
  * NPX é uma ferramenta que usa para executar pacotes.

# Spread Operator Syntax
Spread syntax (...)
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.

# Array.prototype.map()
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

# Array.prototype.filter()
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.


# React 
O react é uma biblioteca e não de um framework
  - https://pt-br.reactjs.org/
  - https://create-react-app.dev/
  - https://vitejs.dev/guide/why.html

## Criando o projeto no Stage09

  * Na pasta do projeto vc executa:
    - npm create vite@latest
    - cd rocketnotes
    - npm install
    - npm run dev


## Anotações sobre o React

  * O react é SPA (Single Page Application)
  * .jsx é a sintaxe que utilizamos pra criar interfaces com react
  * Consegue-se escrever html dentro de javascript graças ao jsx 
  * O nome da interface deve ser o mesmo do arquivo pra facilitar vc se encontrar no projeto.
  * O nome do componente tem que começar com letra maiúscula
  * É comum no react chamar a interface de componentes porque a interface tbm é um componente visto que o react trabalha com componentização que é criar partes para reaproveitar na construção das interfaces, como se fosse um quebra-cabeça 
  * Quando vc usa um export em uma função sem o default vc tem que usar exatamente o nome da função que está no arquivo na hora de importar esse componente em um outro arquivo com as {}. Se usar o default vc pode usar qq nome. É mais pra usar uma padronização no código.
  * REGRA no react: um componente retorna no máximo um elemento. Ai vc usa o Fragment que serve pra "embrulhar" e retorna um único elemento no return da function
  * No react, cada página tem seu próprio css
  * Como organização de diretório e como cada página tem seu próprio css. Cria-se uma pasta com o nome da página, cria o arquivo css e o arquivo que é a página em sí, renomeia-se para index.jsx. Pq assim no diretório com o nome da página, o servidor vai direto pegar o arquivo index pra leitura. Assim não fica redundante da hora de importar.
  * Quando um elemento se repete é um forte candidato a ser um componente. 

# CSS, Pré-processadores, CSS-in-JS
  ## Pré-processadores
    - Um CSS pré processador quer dizer que você não vai utilizar esse arquivo em produção. Na verdade, ele será processado para utilização final no CSS da sua aplicação.
    - CSS Minificado
  ## CSS-in-JS
    - CSS-in-JS fazem muito sentido, porque aproveitam métodos atuais de componentização em JavaScript para criar componentes performáticos a prova de colisão.
    - E tudo isso é extremamente automatizado.
  ## Styled Componentes
    - Style Componentes foi desenvolvido para melhorar a maneira que lidamos com CSS nos componentes de aplicações React.
    - Quais as vantagens? 
      É escrever CSS dentro de JavaScript, ao escrever css dentro do JS aproveitamos todos os recursos que o JS oferece de trabalhar com componentização.
      O styled componentes tbm utiliza a estratégia de um pre processador porque no final das contas ele vai gerar um arquivo css e a minificação do código css.

    - Installation
    
      https://styled-components.com/

      with npm
      npm install --save styled-components


      vscode-styled-components


# Arrow Function

# React Icons

https://react-icons.github.io/react-icons/

# Map
O Map é uma estrutura de repetição

# React Router
https://v5.reactrouter.com/web/guides/quick-start

install:
  - npm install react-router-dom


###### Nível 10 #######

# Se prepare para a entrevista
1. Estude os itens requeridos na vaga.
2. Para um Call escolha um ambiente silencioso.
3. Deixe o ambiente da entrevista organizado.
4. Conheça a empresa (site, linkedin).
5. Conheça o produto principal da empresa.
6. Identifique alguém que trabalha na empresa para conectar-se (linkedin).
7. Seja honesto com o recrutador.
8. Demonstre interesse.
9. Esteja aberto a aprender

# Sua apresentação
1. Apresentação Curta
  * Você tem tempo limitado!
2. Apresentação Direta
  * Vá direto ao ponto.
3. Escreva
  * E leia a sua apresentação para você mesmo.

# Ética na entrevista
1. Porque você está saindo da sua empresa atual?
2. Quais são algumas das melhores e piores coisas sobre sua empresa atual?
3. Busque respostas sem expor ou desmerecer o aprendizado que sua empresa atual proporcinou a você.

# Estrutura de processo seletivo
1. Aplicação para a vaga
2. Avaliação do perfil
3. Entrevista com os candidatos selecionados
4. Teste Técnicos
5. Entrevista com o Gestor
6. Onboarding

# Testes Técnicos
* Os testes técnicos avaliam como você lida com os problemas em um desafio
1. Comunicação: sua comunicação também pode estar sendo testada. Não tenha medo de perguntar em caso de dúvida com algum requisito.
2. Resolução de problemas: compreender o problema e abordá-lo de forma sistêmica e lógica.
3. Competência técnica: implementar a solução, testar o conhecimento prático.
4. Teste: capacidade de testar o código e corrigir.

## Tipos de testes técnicos
1. Codificar um projeto ou funcionalidade
2. Resolver um Bug
3. Refatorar um código
4. Propor melhorias
5. Questionário

## Dicas de testes técnicos
1. Certifique-se de quais ferramentas e tecnologias poderá utilizar.
2. Leia e entenda primeiro o desafio. E leia quantas vezes for necessário.
3. Enquanto codifica, vai relendo o desafio para certificar-se que está no caminho certo e que não perdeu o foco.
4. Pense em fazer da forma mais simples primero. E depois se sobrar tempo, melhore.

# JWT (JSON Web Token)
  É um padrão de mercado que define um token no formato JSON para a troca de informações.
  Importante
  JWT não representa o mecanismo de autenticação. Mas é um meio para a troca de informações no fluxo de autenticação.

  Instalar biblioteca
    - npm install jsonwebtoken
    

# Upload de imagens
  - npm install multer

## Manipulando Arquivos
Módulo fs do Node.js
O módulo fs permite trabalhar e manupular arquivos

# API RESTful
Uma API RESTFUL é aquela que cumpre as diretrizes RESTFUL
## API (Application Programming Interface)
Interface que disponibiliza um conjunto de funcionalidades para serem utilizadas/consumidas

## REST(Representational State Transfer)
Transferência Representacional de Estado. É um modelo de arquitetura e não uma linguagem ou tecnologia de programação, que fornece
diretrizes prar que os sistemas distribuídos se comuniquem usando os princípios e protocolos Web, como por exemplo, o protocolo HTTP

## Diretrizes Restful
  * Client - Server: o cliente e o servidor deve estar separados
  * Stateless: cada requisição deve ter o necessário para o servidor entender e e responder a requisição.
    O servidor não deve lembrar/armazenar estados.
  * Layered System: o cliente acessa um endpoint sem precisar saber como é implementada.

# Biblioteca Cors
  - npm install cors

# Biblioteca Axios
  Pra trabalhar com requisições HTTP
  - npm install axios

# Prop Drilling
# Contexto

# Hooks
Permite que você use estados e outros recursos do React sem escrever uma classe.
Encapsula funcionalidades e facilita o reaproveitamento da sua lógica
Exemplo: useState e useEffect

Padrão de nomenclatura para os hooks, colocar o "use" na frente do nome: useNomeDoHook (camelCase) 

# Estados

# Local Storage
Permite armazenar informações no navegador do usuário.
## Estrutura do Local Storage
Local Storage: Chave ; Valor
Exemplo: localStorage.setItem("user", "Rodrigo Gonçalves");