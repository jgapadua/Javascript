function contar(){
  var ini = document.getElementById('txtini')
  var fim = document.getElementById('txtfim')
  var passo = document.getElementById('txtpas')
  var res=window.document.querySelector('div#res')

  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      res.innerHTML = "Impossivel Contar!"
      window.alert(`[ERRO] Falta dados!`)
      
  } else {
      res.innerHTML = `Contando: <br>`
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      if (p <= 0) {
          window.alert( `Passo inválido! Considerando Passo 1`)
          p = 1
      }

      if (i < f){
          for(var c = i; c <= f; c += p){
          res.innerHTML += `${c} \u{1F449}`
          }
      } else{
          for(var c = i; c >= f; c -= p){
              res.innerHTML += `${c} \u{1F449}`
          }
      }       
      res.innerHTML += `\u{1F3C1}`
  }
}