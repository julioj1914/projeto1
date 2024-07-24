function soma(...valores) {
    let tamanho= valores.length
    let res=0
    for(let i=0; i<tamanho; i++){
        res= res + valores[i]
    }
    return res 
}

console.log(soma(10,3,2,1))

//segundo jeito

function somatorio(...valores) { // usando o ... posso atribuir qualquer quantidade de valores 
    let resp=0 //Declara uma variável chamada resp e a inicializa com o valor 0. Esta variável será usada para armazenar a soma dos valores passados
    for(let v of valores){ //Inicia um laço for...of que percorre cada elemento do array valores. A cada iteração, a variável v contém o valor do elemento atual.
        resp= resp + v //Dentro do laço, a variável resp é atualizada somando o valor do elemento atual v ao seu valor anterior. Esse passo acumula a soma de todos os valores no array valores.
    }
    return resp 
}

console.log(somatorio(10,3,2,10))