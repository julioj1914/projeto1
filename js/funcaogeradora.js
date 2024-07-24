function* cores() {
    yield 'vermelho' // significa que quando acontecer a primeira execução irá pausar aqui e retornar o valor vermelho
    yield 'verde'
    yield 'azul'
}

let cor=cores() // crio uma variavel para armazenar o valor da minha função 
console.log(cor.next().value) 
console.log(cor.next().value)
console.log(cor.next().value)

// O método next é usado para iterar através dos valores de uma função geradora. Quando você chama next em um iterador criado a partir de uma função geradora, ele retoma a execução da função geradora do ponto onde parou (no último yield) e continua até o próximo yield ou até o fim da função geradora. 

// ou seja o next() value, é para chamar o valor que está dentro do yield, e quando eu chamar mais uma vez ele vai para o proximo yield

function* pergunta() {
    let nome= yield 'qual seu nome?'
    let esporte= yield 'qual seu esporte favorito'
    return `meu nome é ${nome} e meu esporte favorito é ${esporte}`
}

const a=pergunta()

console.log(a.next().value) // deixamos esta sem nada somente para ativar o iterador
console.log(a.next('julio').value) // é o valor que eu quero que apareça no meu primeiro yield 
console.log(a.next('futebol').value)

// FUNÇÃO GERADORA JUNTO COM LOOP FOR

function* contador() {
    let i=0
    while(true) {  // enquanto for verdadeiro ele irá add valor ao I
        yield i++
    }
}

let c=contador()
for(let i=0; i<=10; i++) { // I inicia em 0, enquanto I for menor ou igual a 10 adiciona + um
    console.log(c.next().value) 

}