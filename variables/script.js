//Variaveis em JavaScript
//são responsaveis por armazenar dados na memoria do computador

//Declaração de variaveis:

var nome = "Mateus";
let idade = 20;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log(totalPreco);

var sobrenome = "Henrique", cidade = "Arakis";

console.log(sobrenome, cidade);

//Podemos declarar uma variavel sem valor e atribuir o valor depois

var time;
console.log(time);

time = "Flamengo";
console.log(time);

//Hoisting: a variavel é içada para o topo do código, porem seu valor não é

console.log(comida);
var comida = "Pizza";
console.log(comida);

// É possivel modificar o valor de uma variavel declarada com var e let no entanto não é possivel modificar o valor de uma variavel declarada com const
// A diferença entre var e let é o escopo de cada uma, fora o fato de o var permitir duas variaveis com o mesmo nome no mesmo escopo já o let não permite
// EVITAR USAR VAR, PREFIRA LET E CONST - BOA PRATICA!

var animal = "Cachorro";
console.log(animal);
animal = "Gato";
console.log(animal);

let bebida = "Refrigerante";
console.log(bebida);
bebida = "Suco";
console.log(bebida);