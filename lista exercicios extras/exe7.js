
function cliente(saldo,debito,credito){
    saldoAtual=saldo-(debito+credito)
    return (saldoAtual>=0?"Saldo positivo de R$:"+saldoAtual:"Saldo negativo de R$: "+saldoAtual)
    
}
console.log(cliente(1000,500,400))

