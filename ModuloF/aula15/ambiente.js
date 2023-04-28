/*
let = num = [5, 8, 2, 9, 3]
num.push(7) //O método "push" adiciona o valor 7 na última posição.
num.length // verifica quantos elementos há.
num.sort()

console.log(num)
*/

let = num = [5, 8, 2, 9, 3] // Declarando Vetor.
num.push(1) // Vai adicionar o 1 na última posição.
num.sort() // Vai ordenar o vetor num.
console.log(num)
console.log(`O vetor tem ${num.length} elementos`) // mostra quantos itens há.
console.log(`O primeiro valor é ${num[0]}`) //vai mostrar o primeiro elemento.

let pos = num.indexOf(9)  // Pesquisa por determinado valor.

if (pos == -1) {
    console.log('O Valor Não existe!')
}
else {
    console.log(`O valor 8 está na posição ${pos}`)
}


let numb = [Marco, Leticia, Lorenzo]