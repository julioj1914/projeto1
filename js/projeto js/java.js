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
        valores.push(Number(num.value)) // vou add o num que esta o numero que esta dentro de num
        let item = document.createElement('option') // criamos um elemento
        item.text = `valor ${num.value} adicionado`
        tabela.appendChild(item) // adicionando o item no select
        res.innerHTML = '' // para limpar o resultado quando eu add algum valor
    } else {
        window.alert ('valor invalido ou ja encontrado na lista')
    }
    num.value = '' // para esvaziar a caixa após digitar um numero
    num.focus() // para deixar focado na caixa de digitar numero
}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('adicione valores antes de finalizar!!')
    } else {
        let tot = valores.length // para saber a quantidade de elementos adicionados 
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0 
        for (let pos in valores) {
            soma += valores[pos] // fazer a soma entre os valores 
            if (valores[pos] > maior)
                maior = valores[pos] // se o valor do pos for maior que o maior valor, o valor de pos passa a ser o maior valor 
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = '' // para deixar a div res vazia para ir add itens
        res.innerHTML += `<p>ao todo, temos ${tot} numeros cadastrados</p>` // mostra a quantidade de elementos
        res.innerHTML += `<p>o maior valor foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor foi ${menor}</p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p></p>`
    }
}