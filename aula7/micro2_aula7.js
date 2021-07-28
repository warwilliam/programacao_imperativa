


/* 

 const andar=()=>console.log("andando");
 const parar=()=>console.log("parado");

 const executarAcao=(car)=>car();

 executarAcao(acaoCarro,parar)


 */
const bomDia=()=>'Bom dia';  //return
const boaTarde=()=>console.log('Boa tarde');
const boaNoite=()=>console.log('Boa noite');

const executaFuncao=(saudacao)=> saudacao(bomDia,boaTarde,boaNoite);
           //        bomDia            bomDia()
console.log(saudacao(bomDia));   //callback

