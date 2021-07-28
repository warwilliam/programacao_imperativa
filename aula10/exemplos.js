/* metodos de arrays
exemplo de map */

let numeros=[2,4,6,8,10]
//chama uma funcao como callbakc em loop no array
let double= numeros.map(function(aaa){
    return aaa*2;
})

console.log(double)



//Exemplo de Filter
// aplica um filter em loop do array e retorna apenas os elementos que atendem
// atraves de uma function como callbak
let idade=[18,20,6,45,60,19];

let podemEntrarNoBar= idade.filter(function(maior){
    return maior>18
})

console.log(podemEntrarNoBar)

// Exemplo de reduce
//retorna apenas um valor, atraves de um acumulador e um parametro:

let number=[1,2,3,4,5,6,7,8,9]

let somar= number.reduce(
    function(acumulador,numero){
return acumulador+numero
})
console.log(somar)

//forEach()
//nao retorna nada, tem opjetivo de iterar,repetir

let filmes=["Kill bill","matrix","kill bill","caes de aluguel", "donnie darko"]

filmes.forEach(function(filme){
    console,log(filme)
})