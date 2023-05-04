/**
 * Autor: Lucas Alencar Miranda
 * Data: 25/03/2023
 * Descrição : Peça ao usuário que informe seu nome, sua idade, seu cpf e telefone, 
 * enquanto o usuário digite 0 para parar a execução. E informe se a idade é maior que 18 anos,
 * se for maior, informe uma mensagem dizendo que possui cadastro no sistema da loja, caso menor 
 * de idade diga que uma pessoa responsável precisa cadastra-lo no sistema. 
 */

/* 
  Existem três tipos de comandos de saída são eles: 
  console.log() -> mostra o resultado da mensagem no console do navegador ou do terminal.
  alert() -> mostra o resultado abrindo uma janela de pop up.
  document.write() - > Escreva no documento hmtl da página web a mensagem do resultado.
*/

/* 
    Comando de entrada de dados do javascript -> prompt
*/
opcao = parseInt(prompt("Digite 0 para para parar o programa: "))

while(opcao != 0){
    

    //Declaro as minhas variáveis

   let nome = prompt("Digite o seu nome: ")
   let idade = prompt("Digite a sua idade: ")
   let cpf = prompt("Digite seu cpf: ")
   let telefone = prompt("Digite seu telefone com DDD: ")

    //Verifico se a condição idade é maior ou igual 18
    if(idade >= 18){
        console.log("O usuário já possui cadastro no nosso sistema da loja")//Imprime a mensagem 
        
        //console.log(`seu nome é ${nome}`) 
        console.log("Seu nome é " +nome)

        console.log(` A sua idade é ${idade}`  )

        console.log(` O seu cpf é ${cpf}`  )

        console.log(` O seu telefone é ${telefone}`)

    
    }
    else if( idade < 18 && idade <= 17){
        console.log("É necessário um responsável para cadastrar o usuário no sistema da loja.")
        
        console.log(` seu nome é ${nome}`)

        console.log(` A sua idade é ${idade}`  )

        console.log(` O seu cpf é ${cpf}`  )

        console.log(` O seu telefone é ${telefone}`)
        
       
    }
    else if (idade<=0){
       alert("O usuário informou uma idade incorreta.") 
       
    }

    
    opcao = parseInt(prompt("Digite 0 para parar a execução do programa: "))
    
    
}