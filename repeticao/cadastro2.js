opcao = parseInt(prompt("Digite 1 para cadastrar a média do aluno, 2 para mostrar as inforamções do aluno e recuperação, 3 para mostrar as infomações do aluno e dizer que foi reprovado e 0 para sair: "))

while(opcao != 0){
        //Primeiro passo : Declarar variáveis

    let nome = prompt("Digite o nome do aluno: ")
    let idade = parseInt("Digite a sua idade: ")
    let matricula = prompt("Digite sua matrícula: ")
    let nota1 = parseFloat(prompt("Digite a sua primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a sua segunda nota: "))
    let media = 0 //Estou atribuindo a variável média o valor 0

    //Segundo passo: Processamento do cálculo

    media = (nota1 + nota2) / 2

    // Terceiro passo: condição para validar o teste do meu algoritmo  
    

    if(media>=7){
        //Instruções do código 
        console.log("A matrícula no aluno " +matricula)
        console.log("A média do aluno " +nome+ " é " +media)
        console.log("O aluno foi Aprovado")
    }
    opcao = parseInt(prompt("Digite 1 para cadastrar a média do aluno, 2 para mostrar as inforamções do aluno e recuperação, 3 para mostrar as infomações do aluno e dizer que foi reprovado e 0 para sair: "))

    if(media <= 6){ 
        console.log("A matrícula do aluno é " +matricula)
        console.log("A sua idade é " +idade)
        console.log("O aluno " +nome+ " foi para recuperação com a média " + media)
    }
    opcao = parseInt(prompt("Digite 2 para cadastrar a média do aluno, 2 para mostrar as inforamções do aluno e recuperação, 3 para mostrar as infomações do aluno e dizer que foi reprovado e 0 para sair: "))

    if(media < 7){
        console.log("A matrícula no aluno " +matricula)
        console.log("A média do aluno " +nome+ " é " +media)
        console.log("O aluno foi Reprovado")    
    }
}


