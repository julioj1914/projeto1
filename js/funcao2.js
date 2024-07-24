function pin (n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let numero = pin(10)
console.log (numero)


//////////

function soma(n1,n2=0) {
    return n1 + n2
}  //o n2=0 quer dizer que caso eu nao passe o numero do segundo valor, ele valerá como zero

console.log(soma(2,9))

/////

//colocando função dentro de variavel

let v = function(x) {
    return x*2
}

console.log (v(2))

////

//calculando fatorial

function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }

    return fat
}

console.log (fatorial(6))



//// ARROW FUNCTION
// NAO USA A PALAVRA FUNCTION
// É UMA FUNÇÃO ANONIMA, EX:

const lepo = () => "ola mundo!"