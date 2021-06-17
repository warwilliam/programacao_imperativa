
for(let i=1;i<=100;i++){
    let curinga=true;
    
        for(let j=2;j<i;j++){
    
            if(i%j==0){
                console.log(i,'');
                curinga=false;
                break;
            }
    
        }
    
        if(curinga){
            console.log(i,'é primo!');
        }
    
    }
    