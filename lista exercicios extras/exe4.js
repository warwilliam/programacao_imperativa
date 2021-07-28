/* 4)	Armazenar em variáveis de memória as notas da 1a. e 2a. avaliações de um aluno. 
Calcular a média aritmética e mostrar uma mensagem que diga 
se o aluno foi ou não aprovado 
(considerar que nota igual ou maior que 6 o aluno é aprovado). 
Mostrar também a média calculada.  */

let nota1=5
let nota2=5

media=(nota1+nota2)/2

console.log(media>=6?"Aprovado":"Reprovado")
console.log("E sua media e de:"+media)