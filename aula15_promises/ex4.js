//sintaxe da promise
const fs=require('fs')
console.log(1)
//Promise e um construtor que precisa ser instanciado(new)
//Estrutura da promise
const lerArquivo=file=>new Promise((resolve,reject)=>{
    fs.readFile(file,(err,contents)=>{
        if (err){
            reject(err)
        }
        else{
            resolve(String(contents))
        }
    })
})
console.log(2)

//comecar a usar a promise feite acima
//Leia o arquivo de letras
lerArquivo('../Letras.txt').then(contents=>{
    console.log(contents)
    lerArquivo('../Nomes.txt').then(contents=>{
        console.log(contents)
        lerArquivo('../Salarios.txt').then(contents=>{
            console.log(contents)
        })
    })    
})   
