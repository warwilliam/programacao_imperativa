//callback
const bomDia=_=>'Bom dia';  //return
const boaTarde=()=>console.log('Boa tarde');
const boaNoite=()=>console.log('Boa noite');

const executaFuncao=(aaa)=> aaa();
           //        bomDia            bomDia()
//console.log(executaFuncao(boaNoite));   //callback
//executaFuncao(boaNoite);
executaFuncao(boaNoite);
