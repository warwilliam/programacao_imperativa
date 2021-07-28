// leitura dos arquivos de forma sincrona(uma apos a outra)- fs readFileSync()
const fs=require('fs');
/* const arq= fs.readFileSync('./Letras.txt','utf-8')
console.log(arq)
console.log(2)
console.log(3) */
// fs= filesystem
//leitura assincrona - fs readFile()
console.log(1)
const arq=fs.readFile('./Letras.txt',(err,contents)=>{
console.log(4);
console.log(String(contents))
console.log('erro:',err);});