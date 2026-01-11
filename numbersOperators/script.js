// Number: 

var idade = 28;
var gols = 1000;
var pi = 3.14; // numero decimal - ponto flutuante
var exp = 2e10; // 20000000000 - exponencial - tudo após o "e" são zeros

console.log(idade);

// Operadores aritméticos (+, -, /, *, **, %)
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16 - 2 elevado a 4 - potencia
var modulo = 14 % 5; // 4 - resto da divisão

// Operadores aritméticos em strings
var soma = '100' + 50 // concatene 100 com 50 = 10050
var subtracao = '100' - 50; // na subtração, o JS converte a string em número resultando em 50
var multiplicacao = '100' * '2'; // 200 - na multiplicação o JS converte as strings em números
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// Ordem de precedência dos operadores
var total1 = 20 + 5 * 2; // 30 - multiplicação antes da soma
var total2 = (20 + 5) * 2; // 50 - o que estiver entre parênteses tem mais prioridade
var total3 = 20 / 2 * 5; // 50 - divisão e multiplicação tem a mesma precedência, é lido da esquerda para a direita
var total4 = 10 + 10 * 2 + 20 / 2; // 40 - multiplicação e divisão primeiro, depois soma da esquerda para a direita

// Operadores aritiméticos unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6 <- mais correto!
console.log(incremento2); // 6

var decremento = 5;
console.log(decremento--); // 5
console.log(decremento); // 4

var decremento2 = 5;
console.log(--decremento2); // 4 <- mais correto!
console.log(decremento2); // 4

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 - transformou '28' em 28 e somou 5

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
