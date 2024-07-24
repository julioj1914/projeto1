//BREAK

let n=0
let m=100

while(n<m) {
    console.log(n)
    if(n>=10) {
        break // para parar e sair do loop
    }
    n++

}

//CONTINUE

let numero =0
let maximo= 100
pares=0

for(let i=numero; i<maximo; i++) {
    if (i%2 !=0) {
        continue //Dentro do laço, há uma condição if que verifica se i é ímpar (i % 2 != 0). Se i for ímpar, o comando continue é executado, o que faz com que a iteração atual do laço termine imediatamente e passe para a próxima iteração. Ou seja, números ímpares são ignorados.
    }
    pares ++
}

console.log(pares)