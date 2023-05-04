//Cria uma variável chamada sum que quer dizer soma iniciando com 0,
// depois um laço for que faz a contagem de 0 a 14.
//Depois faz o cálculo da soma com a contador i totalizando 105.*/

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i  
}
console.log(sum)

//Forma nova do javascript de iterar sobre listas arrays usando for item of lista
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)




