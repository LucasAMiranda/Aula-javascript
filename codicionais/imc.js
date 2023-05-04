/**
 * Autor : Lucas
 * Data: 22/03/2023 
 * Hora: 20h:43min
 * Descrição: Peça ao usuário que informe seu nome, sua idade, seu peso e sua altura,
 * e diga se ele é está acima do peso ou não.
 */

//Declarando as  variáveis
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let peso = parseInt(prompt("Digite seu peso em KG: "))
let altura = parseFloat(prompt("Digite sua altura metros: "))
let imc
//Processamento do cálculo 

imc = peso/Math.pow(altura, 2)


//condicional composta

if(imc<18.5){
    //bloco de código
    console.log("Abaixo do peso")
    console.log("O meu imc é " + imc.toFixed(2))

}
else if(imc==18.5 || imc<=24.9){
    console.log("Peso Normal. Parabéns")
    console.log("O meu imc é " + imc.toFixed(2))
}
else if(imc==25 || imc<=29.9){
    console.log("Levemente acima do Peso")
    console.log("O meu imc é " + imc.toFixed(2))
}
else if(imc==30 || imc<=34.9){
    console.log("Obesidade Grau 1")
    console.log("O meu imc é " + imc.toFixed(2))
}
else if(imc==35.5 || imc<=39.9){
    console.log("Obesidade Grau 2")
    console.log("O meu imc é " + imc.toFixed(2))
}
else{
    console.log("Obesidade 3(Mórbida)")
    console.log("O meu imc é ", + imc.toFixed(2))
}