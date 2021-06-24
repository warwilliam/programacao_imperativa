function Restaurante(nome,cardapio)
{

    this.nome=nome;
    this.cardapio=cardapio;
    this.entrada= function(){
return "Ola, seja bem vindo ao Restaurante:"
    }}

    let Restaurante1=new Restaurante("Matuto",['prato do dia','saladas',"carnes",'massas','sobremesas','bebidas']);

console.log(Restaurante1);
