let num = document.getElementById ('num')
let tabela = document.getElementById ('tabela')
let res = document.getElementById ('res')
let valores = []

function lnumero(n) {
    if (Number(n) >=1 && Number(n) <=100) { // essa linha significa que o numero tem que ser igual ou maior que 1 e menor ou igual a 100, para ai sim o valor retornar verdadeiro
        return true

    } else {
        return false
    }

}

function lista (n, l) {
    if (l.indexOf(Number(n)) != -1) { // se o numero dentro da lista for diferente de -1 Em resumo, a linha verifica se o valor n, convertido para um número, está presente no array l. Se estiver, a expressão retorna true; caso contrário, retorna false.
        return true
    } else {
        return false
    }

}

function adicionar () {
    if (lnumero(num.value) && !lista(num.value, valores)) {

    } else {
        window.alert ('valor invalido ou ja encontrado na lista')
    }
}