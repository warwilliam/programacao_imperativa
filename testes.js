 
 //FUNCTIONS
 
 //*   function fazerSorvete(quantidade){



  //      return `Sorteve pronto!`. repeat(quantidade)
 //   }

  //  console.log(fazerSorvete(10))*//


/* function saudacao(nome=`Estranger`,sobrenome=`visitante`,idade){
    return `Ola `+nome+` `+sobrenome+` `+ idade
}


console.log(saudacao()) */

// ARROW FUNCTIONS
/* let primeiraFunction= () => 'deu certo!'

let segundaFunction=(a,b) => primeiraFunction+ 100


console.log(segundaFunction ())

 */
// SWITCHS CASES

/* function saudacao(sexo){

     switch(sexo){
        case `menino`: return `e um garoto`
        break;
        case `menina`: return `e uma menina`
        break;

     }
}

 console.log(saudacao('menina')) */

 // ARRAYS

 let  movies= ['pulpFiction','caesDeAluguel','kill bill','kill bill 2']
 //indices do array  0             1             2            3     
 // chamando pelo indice
//console.log(movies[2])

// exibir tamanho do array
//console.log(movies.length)

//push add elementos ao final do array e retorna o indice total
//movies.push(`Era uma vez em hollywood`)
//console.log(movies)

//pop elimina o ultimo elemento ao final do array e retorna o elemento eliminado
//movies.pop()
//console.log(movies)

//shift() elimina o primeiro elemento do array e retorna o elemento eliminado
//movies.shift()
//console.log(movies)

//unshift() add 1 ou mais elementos ao inicio do array e retorna o novo tamanho do array
/* console.log(movies.unshift('django','8odiados','papaco'))
console.log(movies)


//join() junta os elementos do array saparados pela string declarada() ou ,
console.log(movies.join('*')) */

//indexOf() busca o elemento declarado() retorna o primeiro indice que encontrar ou -1 caso nao tenha
//console.log(movies.indexOf('kill bill'))

//lastindexOf() busca o elemento do fim para o comeco declarado() retorna o primeiro indice que encontrar ou -1 caso nao tenha
//console.log(movies.lastIndexOf('kill bill'))

//includes() busca o elemento do fim para o comeco declarado() retorna bolean(true or false)
//console.log(movies.includes('bill'))

//includes() busca o elemento do fim para o comeco declarado() retorna bolean(true or false)
//console.log(movies.includes('bill'))

//Strings e suas propriedades
//let nome= 'William'
//console.log(nome.length)

//OBjetos

let carro={
    cor: 'preto',
    flex: true,
    portas:4,
    aro: 14,
    marca: 'renault',
    modelo: 'clio',
    meuCarro: function(){ return `ta rodando`}
    }
