function gerar() {
  var numero = document.getElementById('num')
  var tabuada = document.getElementById('tabuada')
  if (numero.value.length == 0) {
      window.alert( 'digite um número')
  } else {
      var n = Number(numero.value)
      var c = 1
      tabuada.innerHTML= ''
      while( c <= 10){
          var item = document.createElement('option')
          item.text = `${n} x ${c} = ${n*c}`
          tabuada.appendChild(item)
          c++
      }
  }

}