// Definindo variável do conjunto
let conjunto = []

// Variáveis para controlar os elementos a serem adicionados no conjunto
let elementoConjunto = 1

while (conjunto.length != 100){
    if(elementoConjunto % 15 == 0){
        conjunto.push("FizzBuzz")
    } else if(elementoConjunto % 5 == 0){
        conjunto.push("Buzz")
    } else if(elementoConjunto % 3 == 0){
        conjunto.push("Fizz")
    } else {
        conjunto.push(elementoConjunto)
    }
    
    elementoConjunto++
}

console.log(conjunto);