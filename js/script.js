
function carregar () {
    var msg = document.getElementById ('msg')
    var foto = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerText = `agora são ${hora} horas`

    if (hora >= 0 && hora <12) {
        document.body.style.background = '#E1692A' // quando estiver entre esse horario, sera exibido a imagem do foto.src e o body tera a cor que foi selecionada ali, a cada hora á uma configuração de cor e imagem, ou seja se a hora for de acordo com o if ela exibira aquelas configurações na tela 
        foto.src = 'imagens/manha.png'
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#E0D24C'
        foto.src = 'imagens/tarde.png'
    } else {
        document.body.style.background = '#E0172C'
        foto.src = 'imagens/noite.png'
    }

}