//Condicionais compostas 

/* 
  Faça um programa que controle o semáforo.

  -Variáveis -> semaforo, mensagem
  -condicional -> Verificar se o semaforo está na sinalização correta que foi atribuida pra o semaforo.
  -Saida de dados -> mostrar a mensagem , informando o resultado de acordo com a condição pedida.

*/

//Declarar variável
let semaforo = "vermelho"
let mensagem



if(semaforo == "verde"){      //se(condição1){ bloco de código }
    mensagem = `A sinalização é ${semaforo} e pode passar.`
    alert(mensagem) // comando de saída de dados
}
else if(semaforo == "Amarelo"){ //senão se(condição2){ bloco de código }
    mensagem = `A sinalização é ${semaforo} e pode reduzir a velocidade.`
    alert(mensagem)

}
else{ // senão, também chamado de caso contrário
    mensagem = `A sinalização é ${semaforo} e pode parar`  //variável global que atribui um valor do tipo String 
    alert(mensagem) //comando de saídade dados

}