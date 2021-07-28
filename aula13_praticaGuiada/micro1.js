const produtos=[


{
    NomeDoProduto: 'iphone',
    ValorDoProduto: 2000.00,
    QualidadeDoProduto: 9,
    Status: true
},

{
    NomeDoProduto: 'nespresso',
    ValorDoProduto: 490.00,
    QualidadeDoProduto: 8,
    Status: true,
},

{
    NomeDoProduto: 'irobot',
    ValorDoProduto: 1600.00,
    QualidadeDoProduto: 7.8,
    Status: true,
}]

const carrinho = produtos.filter((produto) =>{
const ValorDoProduto= produto.ValorDoProduto
const QualidadeDoProduto= produto.QualidadeDoProduto
const Status= produto.Status
const escolhidos= (ValorDoProduto>=482 && ValorDoProduto<=1600) && (QualidadeDoProduto>=6) && (Status== true)
return escolhidos
})

carrinho.forEach((produto) =>{
console.log("Produtos:", produto.NomeDoProduto)
console.log('Preco;',produto.ValorDoProduto)
console.log('                                   ')
}
)

const total = carrinho.reduce((acumulador,produto)=>{
    return acumulador.ValorDoProduto+produto.ValorDoProduto
}
)
console.log('Total:', total)