//PARA(INÍCIO; EXPRESSÃO; INCREMENTO)
/*
Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma.
 As turmas não podem ter mais de 40 alunos.
*/
/*
for(let num=1; num<=10; num++){
    alert(num)
}
*/


let numTurmas = parseInt(prompt("Digite a quantidade de turmas:"))
let quantidade_alunos = parseInt(prompt("Digite a quantidade de alunos: "))
let total_alunos = 0

while(numTurmas<=quantidade_alunos){
  
  if(numTurmas <= 40){
    console.log(`O número da turma é ${numTurmas}`)
  }
  
  else if (numTurmas > 40){
    console.log("O número de turmas não pode ter mais de 40 alunos")
  
  }
  
  for(let i=0; i<=numTurmas; i++){
    total_alunos = (quantidade_alunos + numTurmas)/2
    console.log(total_alunos)
  }
  break
}


/*
for(let i=1; i<=10; i++){
    if (i % 2 === 0){
        alert(i)
    }
}



let num = 5;

for (let i = 1; i <= num; i++) {
  console.log(`Tabuada do ${i}:`);
  for (let j = 1; j <= 10; j++) {
    let resultado = i * j;
    console.log(`${i} x ${j} = ${resultado}`);
  }
  console.log("------------------");
}
*/


const carros = ["Mustang", "Ferrari", "Toyota", "Pagero"]

.forEach(element => {
  
  console.log(element)
  
});



/*
console.log(carros.push('GOL'))
console.log(carros)
*/