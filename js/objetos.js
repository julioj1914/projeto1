// objetos sempre dentro de chaves {}

let pessoa = {
    nome : 'julio',
    idade : 21,
    peso: 90.0,
    altura: 1.84,
    estrangeiro: false

}

// posso deixar um objeto vazio para depois atribuir valor:

let produtos = {
    preço : [], // posso deixar um array vazio para adicionar o valor depois 
    quantidade : 0.0 // ou posso deixar uma string vazia "" ou tambem 0.0 para indicar que o valor sera de um numero 
}


// posso colocar um array dentro de um objeto:
const carros = {
    marca : ['ford', 'fiat', 'bmw'],
    modelo : ['ka', 'uno', 'corsa'],
    ano : [1998,2001,2010]


}

// como acessar propriedade usando "."

console.log(pessoa.nome)
console.log(pessoa.estrangeiro)

// acessar propriedade usando ['']

console.log(pessoa['peso'])


/*limitador de casa decimal

.toFixed(coloca aqui o numero de casas decimais)

*/

// ALTERAR/ATUALIZAR VALOR DE PROPRIEDADE, este modo so serve para inserir o primeiro valor

pessoa.nome = "junin"
produtos.preço = [1,50]
produtos.quantidade = [2]

// Usando spreed para adicionar valores a lista

produtos.preço = [...produtos.preço, 2.99, 4.00, 129.00]

// usando spreed em objetos CONST

carros.ano = [...carros.ano, '1980']
carros.marca = [...carros.marca, 'pegeut']
carros.modelo = [...carros.modelo, 'kart']

console.log(carros)
