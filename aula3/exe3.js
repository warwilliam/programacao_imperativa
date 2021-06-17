let nomeJogador= "Rivaldo";
let golsJogador= 1;
let precoEmDolares= 250000;
function fazerGol(){
    golsJogador++;
console.log("GOL!!!");
precoEmDolares= precoEmDolares+10000*golsJogador;
}
fazerGol();
console.log(golsJogador)
console.log("Preco de mercado:",precoEmDolares);
