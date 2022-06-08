function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 14 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        document.body.style.background = '#5fb5f5'
        img.src = 'imagens/manha.png'
    } else if (hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cc6617'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#011423'
    }
}