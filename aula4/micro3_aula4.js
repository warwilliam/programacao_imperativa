
function PodeSubir(alturaPessoa,acompanhante)
   { if(alturaPessoa>1.40 && alturaPessoa<2.00)
       { console.log("Acesso Liberado!")
}
       else if(alturaPessoa>=1.20 && alturaPessoa<1.40 && acompanhante=="sim"){
           console.log("Acesso Liberado apenas com acompanhante")
       }
               else {
           console.log("Acesso negado(por seguranca)")
       }

   }
PodeSubir(1.21,"sim")