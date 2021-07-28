/* function teste(a,b,c,d) {
    if (a===1){
        if (b===1) {
            if (c===1) {
                if (d==1) {
                    console.log('Ok');
                }
                else {
                    console.log('Erro em d');
                }
            }
            else {
                console.log('Erro em c');
            }
        }
        else {
            console.log('Erro em b');
        }
    }
    else {
        console.log('Erro em a');
        }
    }
//codigo Hadoukken ou callback hell
teste(1,1,1,1);
 */

//rafatorando um codigo para ficar melhor, menos complexo
//tecnica de reversao de if para evitar aninhamento
function teste(a,b,c,d) {
    if (a!==1){
        console.log('Erro em a');
        return;
    }
    if (b!==1) {
        console.log('Erro em b');
        return;
    }
    if (c!==1) {
        console.log('Erro em c');
        return;
    }
    if (d!==1) {
        console.log('Erro em d');
        return;
    }
    console.log('Ok');
}

teste(10,1,1,2);
