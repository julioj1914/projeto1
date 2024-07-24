let aviso = document.getElementById('aviso')
let formulario = document.querySelector('form')

let bcalcular = document.getElementById('btnCalcular')
let blimpar = document.getElementById('btnLimpar')

// selecionando as caixas de texto por id 
let bnota1 = document.getElementById('nota1')
let bnota2 = document.getElementById('nota2')
let bnota3 = document.getElementById('nota3')
let bnota4 = document.getElementById('nota4')
let bmedia = document.getElementById('media')
let situ = document.getElementById('situacao')

// calculando a média
function calcularmedia(n1,n2,n3,n4) {
    return (n1 + n2 + n3 + n4) / 4
}

// definir situação final com base na média 

function situacaofinal (mediafinal) {
            let situacaofinal = ''

        if (mediafinal >= 6) {
            situacaofinal = 'aprovado(a)'
        } else if (mediafinal <= 3) {
            situacaofinal = 'reprovado(a)'
        } else {
            situacaofinal = 'recuperação'
        }

        return situacaofinal
}

// formatar caixa da situação final 
function formatarsitu (situacaofinal) {
    console.log('situação final' + situacaofinal)

    switch(situacaofinal) {  // ex caso a situação final seja aprovado, ele ira remover a classe reprovado e recuperação e adicionara somente a classe aprovada que criamos no css, com a tag classlist  

        case 'aprovado(a)': 
            situ.classList.remove('reprovado')
            situ.classList.remove('recuperação')
            situ.classList.add('aprovado')
        break

        case 'reprovado(a)':
            situ.classList.remove('aprovado')
            situ.classList.remove('recuperacao')
            situ.classList.add('reprovado')
        break

        case 'recuperacao':
            situ.classList.remove ('aprovado')
            situ.classList.remove ('reprovado')
            situ.classList.remove ('recuperacapo')
        break    


    }
}


// validar numero da nota e gerar mensagem rapida 

function validarnum (numero) {
    let num1 = bnota1.value // pegando o value(valor da nota 1)
    let num2 = bnota2.value
    let num3 = bnota3.value
    let num4 = bnota4.value
    if (num1 < 0 || num1 > 10 ||
        num2 < 0 || num2 > 10 ||
        num3 < 0 || num3 > 10 || // ou seja aparecerá uma mensagem de alerta na tela, caso alguma nota não esteja entre 1 e 10 
        num4 < 0 || num4 > 10 ) {
            formulario.reset() // limpar o formulario caso o numero digitado nao esteja correto 
            aviso.innerHTML = 'digite uma nota entre 0.0 e 10.0'
            aviso.classList.add('alerta') // vai adicionar no nosso paragrafo aviso no html o que configuramos na class alerta no css 

            // O `setTimeout` é uma função nativa do JavaScript usada para executar uma função ou código específico após um determinado período de tempo. O tempo é especificado em milissegundos. A função `setTimeout` é útil quando você deseja atrasar a execução de uma tarefa ou ação em seu script
            setTimeout(function () { // passando como parametro uma função anonima dentro do setTimeout, que ira ser executada após a fração de 2 segundos(os 2000 que estão na ultima linha do codigo)
                aviso.innerHTML = ''
                aviso.classList.remove('alerta')
            }, 2000);

        }
}

// calcular media após clique no botão 

bcalcular.addEventListener('click', function (e) { // no botão calcular adicionamos o evento onclick com uma função
    console.log('calcular média')

    // pegando o valor das variaveis das notas
    // usar o parsefloat para converter string(texto) em float(numero real)

    let nota1 = parseFloat(bnota1.value)
    let nota2 = parseFloat(bnota2.value)
    let nota3 = parseFloat(bnota3.value)
    let nota4 = parseFloat(bnota4.value)
    let media = calcularmedia(nota1,nota2,nota3,nota4)

   if(isNaN(media) || media <0) { // siginifica se a media nao for um numero ou a media for abaixo de 0
    console.log ('não é um número')
    situ.value = ''
   } else {
    bmedia.value = parseFloat(media) // a caixa da media recebera o valor da media 
    situ.value = situacaofinal(media) // a div situação recebera valor da função situação final(aprovado, etc..)
    formatarsitu(situacaofinal(media))

   }
   e.preventDefault()

})

// APÓS LIMPAR TIRA AS CLASS DA CAIXA DA SITUAÇÃO TAMBÉM

blimpar.addEventListener('click', function() { // ou seja limpa todo o formulario
    situ.classList.remove('aprovado')
    situ.classList.remove('reprovado')
    situ.classList.remove('recuperacao')
})