let nomeJogador= "Rivaldo";
let golsJogador= 0;
let precoEmDolares= 250000;

function fazerGol(){
    golsJogador++
}


function HatTrick(){
    
    let precoDeMercado= 0
fazerGol();
precoDeMercado= precoEmDolares+(precoEmDolares/10)
console.log("GOL!!!")
console.log("Preco de mercado do jogador:",nomeJogador,"Subiu para $",precoDeMercado,"Apos o primeiro gol")

fazerGol()
precoDeMercado= precoDeMercado+(precoDeMercado/10)
console.log("GOL!!!")
console.log("Preco de mercado do jogador:",nomeJogador,"Subiu para $",precoDeMercado,"Apos o segundo gol")
fazerGol()
precoDeMercado= precoDeMercado+(precoDeMercado/10)
console.log("GOL!!!")
console.log("Preco de mercado do jogador:",nomeJogador,"Subiu para $",precoDeMercado,"Apos o terceiro gol")
}
HatTrick()