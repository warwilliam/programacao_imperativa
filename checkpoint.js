function funcao(comida, tempoDigitado) 
{
    let tempoComida;

    switch (comida) 
    {
        case "pipoca":
            tempoComida=10;
            microondas(tempoComida,tempoDigitado)
            break;
        case "macarrão":
            tempoComida=8;
            microondas(tempoComida,tempoDigitado)
            break;
        case "carne":
            tempoComida=15;
            microondas(tempoComida,tempoDigitado)
            break;
        case "feijão":
            tempoComida=12;
            microondas(tempoComida,tempoDigitado)
            break;
        case "brigadeiro":
            tempoComida=8;
            microondas(tempoComida,tempoDigitado)
            break;
        default:
            console.log("Prato inexistente")
    }
}

function microondas(tempoComida,tempoDigitado)
{
    if(tempoDigitado < tempoComida)
    {
        console.log("Tempo de preparo insuficiente")
    }
    else if(tempoDigitado > 2*tempoComida && tempoDigitado <= 3*tempoComida)
    {
        console.log("A comida queimou")
    }
    else if(tempoDigitado > 3*tempoComida)
    {
        console.log("Kabumm!")
    }
    else
    {
        console.log("Sua comida está pronta")
    }
}


 funcao('pipoca',35)

