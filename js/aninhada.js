// usando condição aninhada //
var idade = 87
if (idade < 16) {
    console.log ('não vota')
} else if (idade < 18 || idade > 65) {
    console.log ('voto opicional')
} else {
    console.log ('voto obrigatório')
}


var hora = 22
console.log (`agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log ('bom dia!!')
} else if (hora >=  12 && hora <= 18 ) {
    console.log ('boa tarde!!')
} else if (hora > 18 && hora <= 23) {
    console.log ('boa noite!!')
}