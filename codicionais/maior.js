/*  
    Condicional simples
    Faça um programa que peça ao usuário um número e outro número e diga se é maior ou menor.
*/

let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite outro número: "))

if(num1>num2){
    console.log("O maior número é " +num1)
}else{
    console.log("O maior número é " +num2)
}

