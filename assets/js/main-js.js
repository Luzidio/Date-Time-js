function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  hora = 10
  if (hora >= 0 && hora < 12) {
    //Bom dia
    msg.innerHTML = 'Bom dia, Agora são ' + hora + ' horas.'
    img.src = './assets/img/manha.png'
    document.body.style.background = '#f0964a'
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    msg.innerHTML = 'Boa tarde Agora são ' + hora + ' horas.'
    img.src = './assets/img/tarde.png'
    document.body.style.background = '#1b0e2c'
  } else {
    //Boa noite
    msg.innerHTML = 'Boa noite Agora são ' + hora + ' horas.'
    img.src = './assets/img/noite.png'
    document.body.style.background = '#6b6c6e'
  }
}
