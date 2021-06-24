//callback
const bomDia=()=>'Bom dia';  //return
const boaTarde=()=>console.log('Boa tarde');
const boaNoite=()=>console.log('Boa noite');

const executaFuncao=(saudacao)=> saudacao();
           //        bomDia            bomDia()
console.log(executaFuncao(boaTarde));   //callback
//executaFuncao(boaNoite);
//executaFuncao(boaNoite);
