// Funções são Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

function pi() {
    return 3.14159;
}

var total = 5 * pi(); // 15.7
console.log(total);

// Parâmetros e Argumentos
// Parâmetros são os nomes passados na definição da função.
// Argumentos são os valores reais passados para a função.

// peso e altura são os parâmetros
function imc (peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
imc(60, 1.70); // 60 e 1.70 são os argumentos

console.log(imc(80, 1.80));
console.log(imc(60, 1.70));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu.';
    }
    else if(cor === 'verde'){
        return 'Você gosta de mato';
    }
    else {
        return 'Você não gosta de nada.';
    }
}

// Funções podem ser argunmentos de outras funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function() { // click é o evento da função
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// --------------------------------------------------------------------------------------------------------------

// Funções podem ou não retornar um valor
/*Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente 
de existir valor de return ou não*/

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// --------------------------------------------------------------------------------------------------------------

// Valores Retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) { // Não é uma boa pratica usar esse tipo de função!
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// --------------------------------------------------------------------------------------------------------------

// Escopo 
// Variáveis e funções definidas dentro de um bloco {}, não são acessiveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não está definida fora da função - escopos diferentes!

// --------------------------------------------------------------------------------------------------------------

// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto pai(globais)

var profissao = 'Designer';

function dados() {
  var nome = 'Matheus'
  var idade = 21 // foi sobrescrito no retorno por conta de outra variável idade dentro da função outrosDados
  function outrosDados() {
    var endereco = 'Minas Gerais'
    var idade = 22
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados()) // retorna 'Matheus, 22, Minas Gerais, Designer'
outrosDados() // erro, outrosDados não está definida no escopo pai

// --------------------------------------------------------------------------------------------------------------

// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc3(80, 1.80); // imc aparece no console mesmo estando declarado antes da função

function imc3(peso, altura) {
  const imc3 = peso / (altura ** 2);
  console.log(imc3);
}
