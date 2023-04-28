function carregar(){
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('img')
var agora=new Date()
var hora = agora.getHours()
msg.innerHTML=`Agora são <strong>${hora}</strong> horas.`
if(hora>=0 && hora<12){
  img.src='foto-manha.jpg'
  document.body.style.background='#e2cd9f'
}else if(hora>=12 && hora<=18){
  img.src='foto-tarde.jpg'
  document.body.style.background='#b9846f'
}else{
  img.src='foto-noite.jpg'
  document.body.style.background='#515154'
}

}