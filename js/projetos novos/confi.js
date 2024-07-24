let formulario = document.getElementById('formulario');

let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let enviar = document.getElementById('enviar');
let limpar = document.getElementById('limpar'); 
let aviso = document.getElementById('aviso');
let pessoa = document.getElementsByClassName('pessoa');
let imc1 = document.getElementById('resultadoimc');

enviar.addEventListener('click', function (e) {
    // Pegando os valores de cada input 
    let nome1 = nome.value; 
    let idade1 = idade.value;
    let peso1 = peso.value;
    let altura1 = altura.value;
    let imc = (peso1 / (altura1 * altura1)).toFixed(1);

    imc1.value = imc;
    let sit = situacaodopeso(imc);
    aviso.innerHTML = sit;

    // Criar objeto pessoa para aparecer no parágrafo de baixo
    let pessoaObj = {
        nome: nome1,
        idade: idade1,
        peso: peso1,
        altura: altura1,
        imc: imc,
        sit: sit,
    };

    console.log(pessoaObj);
    pessoa[1].innerHTML = pessoaObj.nome;
    pessoa[2].innerHTML = pessoaObj.idade + " anos"; // Concatenação
    pessoa[3].innerHTML = pessoaObj.peso + " kg";
    pessoa[4].innerHTML = pessoaObj.altura + " m";
    pessoa[5].innerHTML = pessoaObj.imc + " " + pessoaObj.sit;

    e.preventDefault(); // Impede o envio do formulário
});

function situacaodopeso(imc) {
    let situacao = '';
    if (imc < 18.5) { 
        situacao = 'baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'obesidade I';
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'obesidade II';
    } else if (imc >= 40) {
        situacao = 'obesidade III';
    } else {
        situacao = 'informe seu peso corretamente';
    }
    return situacao;
}

