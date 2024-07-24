// WHILE
var c = 1 
while (c < 7) {
    console.log ('tudo bem?')
    c = c + 1
}

// DO WHILE
var b = 1             
do {
    console.log (`passo ${b}`)
    b = b + 1
} while ( b < 7)

// FOR
    // inicio --- teste -- incremento
for (var a = 1; a < 7; a = a +1 ) {
    console.log (`passo ${a}`)
}    

//FOR JUNTO COM IF

for (let i=0; i<11; i++) {
    if (i %2==0) {
        console.log(`o numero ${i} é par`)
    } else {
        console.log(`o numero ${i} é impar`)
    }


}

//USANDO FOR PARA PERCORRER ARRAY

let jeta = [10,20,40,50,67]

/*for(n of jeta) {
    console.log(n)
} */

// ou de desse jeito

for(let k = 0; k < jeta.length; k++ ) { // para percorrer enquanto o iterador for menor que o tamanho da minha lista
    console.log(jeta[k])
}


// FOREACH = PARA CADA

let frutas = ['pera', 'maça', 'uva', 'banana', 'melancia']

frutas.forEach(function(fruta, v) { /*
    O método forEach executa uma função fornecida uma vez para cada elemento do array. A função fornecida é uma função anônima que aceita dois parâmetros: fruta e v.
fruta: o valor do elemento atual do array que está sendo processado.
v: o índice do elemento atual do array. */
    
  
    console.log(`${v} fruta ${fruta}`)
})