let f=0.10
let v=0.05
let c=0
let totalApagar=0
function compra(cliente,total){
  
    if(cliente=="f")
    { return(total-total*f)
}
    if(cliente=="v"){
        return(total-total*v)
    }
            else {
        return(total)
    }
}

console.log(compra("v",3000))