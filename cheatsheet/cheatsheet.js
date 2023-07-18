// Formas de declarar variáveis:.
var variable01 = null;
let variable02 = null;
const variable03 = null;

// Tipos de dados:
const stringVariable = 'Olá eu sou uma string';
const numberVariable = 33;
const booleanVariable00 = false;
const booleanVariable01 = true;
const undefinedVariable = undefined;
const nullVariable = null;
const arrayVariable = [0, 1, 2, 3, 4, 5];
const objectVariable = { chave: 'valor'};

// Trabalhando com arrays:
const myFirstArray = ['valor01', 'valor02'];
  // Acessar valores em Arrays:
    console.log(myFirstArray[0]);
  // Verificando número de dados do Array:
    console.log(myFirstArray.length);
  // Adicionando valores no fim do Array:
    myFirstArray.push('valor03');
    console.log(myFirstArray);
  // Removendo valores no fim do Array:
    myFirstArray.pop();
    console.log(myFirstArray);
