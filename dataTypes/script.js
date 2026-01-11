// Tipos de Dados: 

// Todos são tipos primitivos exeto o objeto

var nome = 'Matheus'; // String - cadeida de texto
var idade = 28; // Number
var possuiFaculdade = true; // Boolean - verdadeiro ou falso
var time; // Undefined - sem valor definido
var comida = null; // Null - nulo
var simbolo = Symbol() // Symbol

var novoObjeto = {} // Object

// Verificando os tipos de dados - comando typeof
console.log(typeof nome);

// STRINGS: 
// podem ser declaradas com aspas simples, duplas ou crases
// é possivel somar strings, assim concatenando as palavras
// não é possivel ter aspas duplas dentro de aspas duplas, ou aspas simples dentro de aspas simples
// mas é possivel usar aspas simples ou duplas dentro de crases
// a \ (barra invertida) serve para escapar caracteres especiais

var nome = 'Anakin';
var sobrenome = 'Skywalker';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// é possivel concatenar strings com números
// sempre que uma string é somada com numeros, o tipo final é string

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
console.log(frase1);

// TEMPLATE STRINGS:
// Utilizam crases ao invés de aspas
// Permitem a interpolação de variáveis e expressões usando o simbolo ${} - permite usar javascript dentro da string

var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);