function contar() {
    let inicio = document.getElementById ("inicio")
    let fim = document.getElementById ("fim")
    let passo = document.getElementById ("passo")
    let res = document.getElementById ("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[erro] faltam dados')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c = c + p) {
            res.innerHTML += `${c} `

        }
    }
}