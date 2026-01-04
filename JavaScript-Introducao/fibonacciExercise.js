// Importando biblioteca para coletar o input do usuário
const input = require('readline-sync');

// Definindo Array
const conjuntoFibonacci = [0, 1]

// Input do usuário com total desejado
let totalItens = input.question("Deseja qual tamanho para a sequencia?");

for(let numeroFibonacci; conjuntoFibonacci.length < totalItens;){
    numeroFibonacci = somaNumeros(conjuntoFibonacci)
    conjuntoFibonacci.push(numeroFibonacci)
}

console.log(conjuntoFibonacci.slice(0, totalItens))

// Função que calcula os 2 últimos números no array
function somaNumeros(conjuntoFibonacci){

    return conjuntoFibonacci[conjuntoFibonacci.length - 1] + conjuntoFibonacci[conjuntoFibonacci.length - 2]
}