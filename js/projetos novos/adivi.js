let numeroSecreto = 0

let contador = 1
let min = 1
let max = 10
let situacao = ''

// selecionar elementos
let inputNumero = document.querySelector('#inputNumero')  // input Numero
let btnChutar   = document.querySelector('#btnChutar') // botao Chutar
let aviso       = document.querySelector('#aviso')     // paragrafo do aviso


// FUNCOES OU METODOS PARA CONTROLAR O JOGO
function gerarNumeroSecreto() {
    // gerar numero secreto
    // para gerar o numero secreto
    numeroSecreto = Math.floor(Math.random() * (max - min +1)) + 1;
    console.log("Número secreto gerado:", numeroSecreto);  // A função Math.floor em JavaScript é usada para arredondar um número para o inteiro mais próximo para baixo. Em outras palavras, ela retorna o maior inteiro menor ou igual ao número fornecido.  Math.random(): Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo). 
    //Exemplo Prático
   // Se min é 1 e max é 10:
   // Math.random() pode gerar algo como 0.456.
   // 0.456 * (10 - 1 + 1) é 0.456 * 10, que é 4.56.
    //Math.floor(4.56) é 4.
   // 4 + 1 é 5, então o numerosecreto será 5.
   
}

function bloquearBtnChutar() {
    btnChutar.setAttribute('disabled', 'disabled') // setatribute = definir atributo, setAttribute('disabled', 'disabled'): esta função define o atributo disabled do botão e atribui a ele o valor 'disabled'. disabled siginifica que o botão sera desativado 
    btnChutar.style.background = '#ccc'
    btnChutar.style.cursor = 'not-allowed'
}

function ativarBtnChutar() { 
    btnChutar.removeAttribute('disabled')  // remove o atributo disabled, deixando o botao novamente ativado
    btnChutar.style.background = '#222'
    btnChutar.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero) {
    numero = parseInt(numero);
    if(numero <= 0 || numero > 10) {
        
        aviso.classList.add('errou')
        mensagemRapida('[ERRO] Digite um número inteiro entre 1 e 10.')
        bloquearBtnChutar()
        inputNumero.value = ''
    } 
}    




function jogar() {
    
    verificarSeAcertou()
}

function mensagemRapida(mensagem) { // settimiout é a função que faz exibir uma mensagem rapida
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {

        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida(`acertou o numero secreto era ${numeroSecreto}`)
        break

        case 'Chute maior':
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')
        break

        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto')
        break

        
    } // fim do switch case
}

function verificarSeAcertou() {
    // pegar o valor do input numero digitado e converter para inteiro
    chute = parseInt(document.querySelector('#inputNumero').value,10)
    
    
    if(numeroSecreto === chute) {
        
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto() // gerar novo numero secreto
    } else if (chute > numeroSecreto) {
        
        situacao = 'Chute maior'
        gameOver(situacao)
    } else if (chute < numeroSecreto) {
       
        situacao = 'Chute menor'
        gameOver(situacao)
    } 

}