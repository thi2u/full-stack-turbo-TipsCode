// Definindo variável do conjunto
let conjunto = []

// Variáveis para controlar os elementos a serem adicionados no conjunto
for(let elementoConjunto = 1; conjunto.length < 100; elementoConjunto++){
    if(elementoConjunto % 15 == 0){
        conjunto.push("FizzBuzz")
    } else if(elementoConjunto % 5 == 0){
        conjunto.push("Buzz")
    } else if(elementoConjunto % 3 == 0){
        conjunto.push("Fizz")
    } else {
        conjunto.push(elementoConjunto)
    }
}

console.log(conjunto);