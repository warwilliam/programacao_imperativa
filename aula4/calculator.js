function calcular(numA,numB,operacao)
{
    if(operacao=="+"){
        return numA+numB}

    if(operacao=="-"){
        return numA-numB}
    
    if(operacao=="*"){
            return numA*numB}
    
    if(operacao=="/" && numB!=0){
                   return numA/numB}

    else {
        return "Impossivel dividir por 0"
    }

    
    
    
    
    }
let resultado= calcular(2,5,"+");console.log("Resultado="+resultado)