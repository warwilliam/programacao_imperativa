function calculadora(num1,num2,operador){
    switch(operador){
     case "+":return num1+num2
     break
     case "-":return num1-num2
     break
     case "/":return num1/num2
     break
     case "*":return num1*num2
     break
    }
}
console.log(calculadora(5,0,"/"))