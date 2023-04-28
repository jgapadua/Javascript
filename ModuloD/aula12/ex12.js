var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
}
else if (idade >= 16 && idade < 18 || idade > 65){
    console.log('Voto opcional!')
}
else if (idade >= 18) {
    console.log(`Voto obrigatório!`)
}


var idade = 22 
console.log (`Você tem ${idade} anos.`)
if (idade < 16 || idade > 65) {
    console.log ('Nao vota')
}
else if (idade < 18) {
    console.log('Voto Opcional')
}
else if (idade >= 18) {
    console.log('Voto Obrigatorio')
}