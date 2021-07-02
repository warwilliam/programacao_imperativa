//objeto
//{propriedade: valor,
// propriedade: valor}

 operacoes={
    soma:(a,b) => a + b,
    subtracao:(a, b) => a-b,
    multiplicacao:(a,b) => {if (b!=0 && a!=0){
        return a*b}
     return `Mandamento 2 da matematica: nunca multiplicara por 0!`},
    divisao: (a,b) => { if (b !=0) {
        return a/b;
    } 
    return  `Mandamento 1 da matematica: nunca dividira por 0!`;}
    
}
    module.exports= operacoes
