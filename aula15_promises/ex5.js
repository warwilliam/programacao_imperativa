/* function somaNum() {
    //síncrono
    
    let result = 1+3;
    if (result==2) {
        sucessoCallback();
    }
    else {
        erroCallback();
    }
}

function sucessoCallback() {
    console.log("Ok - número 2!!!");
}

function erroCallback() {
    console.log("erro não é o número 2!!!");
}

somaNum(); */
//TRanformando a funcao acima em uma promise
//Primeiro criando a estrutura da promise
const p=new Promise((resolve,reject)=>{
    let result = 1+1;
    if (result==2) {
        resolve('Ok - numero 2!');
    }
    else {
        reject('Erro nao e o numero 2!');
    }
})

//Utilizando/consumindo esta promise
p.then(message=>console.log(message))
.catch((err=>console.log(err)))