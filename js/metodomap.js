let cursos=['html', 'css', 'javascript', 'PHP'] //criamos uma lista 
cursos.map((elemento,indice)=>{  // no metodo map temos 2 parametros, o primeiro os elementos que estao dentro da lista e o segundo o indice, ou seja a posição dos elementos na lista, e aqui criamos dentro de uma arrow function sinalizada com o =>
    console.log(`curso ${elemento} - posição ${indice}`)
})