// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
// Propriedades e métodos consistem em nome (chave) e valor

// Cada variavel é chamada de propriedade! Separados sempre por vírgula!

var pessoa = { // essa atribuição que é chamada de propriedade e o conjunto dessas propriedades é o objeto!
    nome: "Link",
    idade: 17,
    profissao: "Cavaleiro",
    possuiHabilidade: true,
}

console.log(pessoa.nome) // Acessando a propriedade nome do objeto pessoa
console.log(pessoa.idade) // Acessando a propriedade idade do objeto pessoa 
console.log(pessoa.profissao) // Acessando a propriedade profissao do objeto pessoa
console.log(pessoa.possuiHabilidade) // Acessando a propriedade possuiHabilidade do objeto pessoa

// -------------------------------------------------------------------------------------------------

//Métodos
//É uma propriedade que possui uma função no local do seu valor.

/*var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado; // aqui usamos o this para referenciar o próprio objeto
  },
}*/

// Sintaxe curta de métodos (ES6)
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

// -------------------------------------------------------------------------------------------------

// Organizar o Código
// Objetos servem para organizar o código em pequenas partes reutilizáveis.
// Exemplos: 

Math.PI; // 3.14 <- pi == propriedade do objeto Math
Math.random(); // número aleatório <- random == método do objeto Math

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// -------------------------------------------------------------------------------------------------

// Criar um Objeto
// Um objeto é criado sempre utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// -------------------------------------------------------------------------------------------------

// Dot Notation Get - Notação de Ponto para Obter Valores
// Acesse propriedades de um objeto utilizando o ponto .
// Dot Notation Set - Notação de Ponto para Definir Valores
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
// Adicionar Propriedades e Métodos
// Basta adicionar um novo nome e definir o valor.

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000'; // Alterando a propriedade backgroundColor do objeto menu atraves da Dot Notation Set

// A Dot Notation também permite adicionar novas propriedades ao objeto.
menu.color = 'blue';

console.log(menu.backgroundColor); // '#000'
console.log(menu.color); // 'blue'

// -------------------------------------------------------------------------------------------------

// Palavra-chave this
// this irá fazer uma referência ao próprio objeto.

var height = 120;

var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

console.log(menu2.metadeHeight()) // 25
// sem o this, seria 60

// -------------------------------------------------------------------------------------------------

// Protótipo e Herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// Herda propriedades e métodos de Object como a hasOwnProperty
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object

// -------------------------------------------------------------------------------------------------