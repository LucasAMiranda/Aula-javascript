//while (enquanto)
/*
let contador = 0 

while(contador<11){
    console.log("5 x " + contador + " = " + 5 * contador)
    contador++
}
*/

/* 
 Algoritmo da Tabuada
*/

let i=0
let opcao = prompt("Digite o operador que deseja fazer o cálculo: ")
let num1 = parseFloat(prompt("Digite o primeiro número: "))
let num2 = parseFloat(prompt("Digite o segundo número: "))
let calculo


while(i===0){
  
    switch(opcao){
        case "soma":
            calculo = num1 + num2
            console.log(`O resultado da soma é ${calculo}`)
            continue
        case "subtração":
            calculo = num1 - num2
            console.log(`O resultado da subtração é ${calculo}`)
            break
        case "divisão":
            calculo = num1 / num2
            console.log(`O resultado da divisão é ${calculo}`)
            break
        case "multiplicação":
            calculo = num1 * num2
            console.log(`O resultado da multiplicação é ${calculo}`)
            break
        default:
            console.log("O operador que você digitou não existe na tabuada!")
            break
    }

    break
    
}