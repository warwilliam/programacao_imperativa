let pecas=["memoria","processador","hd","gpu"]

//Testando os metodos Join, Pop, Push, Shift e Unshift. 

console.log("Atravez do join, os elementos do meu array ficam separados pelo caracter escolhido, no caso # :")
console.log(pecas.join("#"))

console.log("Com o pop excluimos o ultimo elemento do array e retorna o elemento excluido, no caso gpu")
console.log(pecas.pop())

console.log("o push executa o contrario do pop, ele inclui um elemento declarado ao final do array e retorna o indice:")
console.log(pecas.push("motherboard"))

console.log("Exclui um elemento assim como o pop, porem retira do inicio do array, retornando o item excluido:")
console.log(pecas.shift())

console.log("Executa o contrario do shift, inclui um elemento declarado ao inicio do array, e retorna o indice:")
console.log(pecas.unshift("gabinete"))
console.log(pecas)