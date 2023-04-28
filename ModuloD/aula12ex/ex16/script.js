function verificar(){
var tanonas=window.document.getElementById('txtano')
var anonas=Number(tanonas.value)
var agora=new Date()
var anoatual = agora.getFullYear()
var res=window.document.querySelector('div#res')

if(anonas==0 || anonas>anoatual){
  window.alert('[ERROR] Verifique os dados e tente novamente!')
}else{
  var sex=document.getElementsByName('radsex')
  var idade = anoatual - anonas
  var gênero=''
  var img = document.createElement('img')
  img.setAttribute('id','foto')
  if(sex[0].checked){
    gênero='Homem'
    if (idade >=0 && idade <10) {
      //Criança
      img.setAttribute('src', './assets/criançaM.jpg')
  }else if (idade <=21){
      // jovem
      img.setAttribute('src', './assets/jovemM.jpg')
  }else if (idade < 50){
      // adulto
      img.setAttribute('src', './assets/adultoM.jpg')
  }else {
      //idoso
      img.setAttribute('src', './assets/idoso.jpg')
  }
  }else if(sex[1].checked){
    gênero='Mulher'
    if (idade >=0 && idade <10) {
      //Criança
      img.setAttribute('src', './assets/criançaF.jpg')
  }else if (idade <=21){
      // jovem
      img.setAttribute('src', './assets/jovemF.jpg')
  }else if (idade < 50){
      // adulto
      img.setAttribute('src', './assets/adultoF.jpg')
  }else {
      //idoso
      img.setAttribute('src', './assets/idosa.jpg')
  }
  }
  res.style.textAlign='center'
  res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
  res.appendChild(img)
}


}