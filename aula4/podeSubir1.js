
function PodeSubir(alturaPessoa,acompanhante)
   { if(alturaPessoa>1.40 && alturaPessoa<2.00 && acompanhante)
       { console.log(true)
}
       else if(alturaPessoa>=1.20 && alturaPessoa<1.40 && acompanhante=="sim"){
           console.log(true)
       }
               else {
           console.log(false)
       }

   }
PodeSubir(1.21,"sim")