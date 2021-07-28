//map
let pares=[2,4,6,8,10]

let impares=pares.map(function(num){
    return num+1
})
console.log(impares)

//filter
let nomes=['joao','maria','jose','marina','bill','maria']
let marias=nomes.filter(function(nome){
return nome=='maria'
})
console.log(marias)

//reduce

number=[1,2,3,4,5,6,7,8,9]

numeros=number.reduce(function(acumulador,num){
    return acumulador+'-'+num
})
console.log(numeros)

//forEach

animais=['cachorro','gato','pato','ornitorinco','fenix']

animais.forEach(
    function(animal) {
console.log('O animal e:',animal)

});