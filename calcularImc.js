///exercicios de funcoes
function calcularImc(peso,altura){
   return (peso/(altura/100)**2)
}
console.log(calcularImc(83,183));


//fazer calculadora usando function e if
function calculadora(num1,num2,operador){
 if (operador=='+') 
 {return num1+num2}
 if (operador=='-') 
 {return num1-num2}
 if (operador=='/' && num2!=0) 
 {return num1/num2}
 if(operador=='*') 
 {return num1*num2}
 else{return 'nunca dividiras por 0'}
 
}
let resultado= calculadora(5,6,'/')
console.log('O resultado do calculo:'+resultado)