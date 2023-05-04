//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

//Declarar Variáveis

//Enquanto(expressão)
let nota = parseInt(prompt("Digite uma nota entre 0 e 10: "))
while(nota != 0){
    //condição para validar , se a nota é válida ou não
    if(nota<0){
       console.log("Nota Inválida")
    }  
    //condiçaõ que mostra uma janela de popup dizendo nota é válida
    else if (nota >= 0 || nota === 10){
        alert("Nota Válida")
        break
    }

  break
        
}

