
function carregar () {
    var msg = document.getElementById ('msg')
    var foto = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerText = `agora são ${hora} horas`

    if (hora >= 0 && hora <12) {
        document.body.style.background
        foto.src = 'imagens/manha.png'
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background
        foto.src = 'imagens/tarde.png'
    } else {
        document.body.style.background
        foto.src = 'imagens/noite.png'
    }

}