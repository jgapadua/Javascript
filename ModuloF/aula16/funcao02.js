//Função com parâmetro opcional:

function soma(n1=0, n2=0) {
  return n1 + n2
}

console.log(soma(10))

/*function metade(n) {
  return n / 2
}

console.log(metade(10))
*/



/*
function maiuscula(s='') {
  return s.toUpperCase()
}

console.log(maiuscula('m'))
*/

function minuscula (s='', m=true) {
  if (m == true) {
      return s.toUpperCase()
  }
  else {
      return s.toLowerCase()
  }
}

console.log(minuscula('joão', false))