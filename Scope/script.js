// Escpo
// Escopo de Função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
// Escopo evita o conflito entre nomes.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// ---------------------------------------------------------------------------------------------

// Variável Global (Erro)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
// O 'use strict' é uma forma de evitar que as variaveis criadas dessa forma ocupem o escopo global do código.

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// ---------------------------------------------------------------------------------------------

// Escopo de Função Pai
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções mesmo declaradas com o tipo.

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca
// ---------------------------------------------------------------------------------------------

// Escopo de Bloco
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

// ---------------------------------------------------------------------------------------------

/* Curiosidade: o criador do JavaScript construiu a linguagem em 10 dias, e nesses 10 dias ele não conseguiu criar o escopó de bloco, 
portanto quando ele fez as correções da linguagem para os padrões mais atuais como o ES6, ele criou os tipos cont e let, uma vez que o
var vazava do escopo dos blocos de código*/

// ---------------------------------------------------------------------------------------------

// Var Vaza o Bloco
// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined

// ---------------------------------------------------------------------------------------------

// Const e Let no lugar de Var
// A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined

// ---------------------------------------------------------------------------------------------

// {} cria um bloco
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

// ---------------------------------------------------------------------------------------------

// For Loop
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// ---------------------------------------------------------------------------------------------

// For Loop com Let
// Com o let evitamos que o número vaze.

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

// ---------------------------------------------------------------------------------------------

// Const
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
// Variáveis com valores constantes devem utilizar o const.

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

// ---------------------------------------------------------------------------------------------

// Let
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
// Geralmente vamos utilizar o const.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável

