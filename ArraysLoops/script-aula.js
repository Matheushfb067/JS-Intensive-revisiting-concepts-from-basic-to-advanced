// Array (vetores) - Variaveis indexaveis unidirecionais
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['switch', 'Ps4', 'Xbox']

// -----------------------------------------------

// Métodos e Propriedades de uma Array

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

// -----------------------------------------------

// Loop For
// O laço for é uma estrutura de repetição que tem a finalidade de repetir algo até que uma condição seja satisfeita
// O for loop possui 3 partes, início, condição e incremento

for(var i = 0; i < 4; i++) {
    console.log(i);
}

// -----------------------------------------------

// Loop While
// Diferentemente do loop for, o while é uma estrutura de repetição no entanto, é usado quando não se tem uma condição de parada para o laço
// É menos convencional que o for 

var j = 0;
while (j < 4) {
  console.log(j);
  j++;
}

// -----------------------------------------------

// Arrays e Loops
// Geralmente, o mais convencional são vetores e repetições interagindo entre si, portanto: 
// Podemos usar um loop para percorrer um vetor (caso mais convencional)

var videoGame = ['Ps2', 'Game Cube', 'Mega Drive']
for(var i = 0; i < videoGame.length; i++) {
    console.log(videoGame[i])
}

// -----------------------------------------------

// Break
// Palavra reservada para interromper o processo de um loop quando necessario

var game = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < game.length; i++) {
  console.log(game[i]);
  if(game[i] === 'PS4') {
    break;
  }
}

// -----------------------------------------------

// Foreach
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
// Podemos passar os seguintes parâmetros item(é uma variavel aleatoria que assume os valores do vetor), index(exibe o indicie do array) e array(exibe o array inteiro)

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
