// Pegando valores para o relógio digital normal
let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');

// Pegando valores para relógio smart 
let hsmart = document.getElementById('hSmart');
let msmart = document.getElementById('mSmart');
let ssmart = document.getElementById('sSmart');

// Valores para data e semana
let data = document.getElementById('data');
let semana = document.getElementById('semana');

function moveRelogio() {
    let momentoAtual = new Date();

    let hora = momentoAtual.getHours(); // Para pegar hora 
    let minuto = momentoAtual.getMinutes(); // Para minutos
    let segundo = momentoAtual.getSeconds(); // Para segundos 

    // Para adicionar 2 dígitos, converto para string para saber o comprimento 
    let strHora = hora.toString().padStart(2, '0');
    let strMinuto = minuto.toString().padStart(2, '0');
    let strSegundo = segundo.toString().padStart(2, '0');

    // Adicionamos os valores dos dígitos para nossas variáveis 
    h.innerHTML = strHora;
    m.innerHTML = strMinuto;
    s.innerHTML = strSegundo;

    hsmart.innerHTML = strHora;
    msmart.innerHTML = strMinuto;
    ssmart.innerHTML = strSegundo;

    setTimeout(moveRelogio, 1000);

    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundImage = "url('imagens/Amanhecer01.jpg')";
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundImage = "url('imagens/tarde02.jpg')";
    } else {
        document.body.style.backgroundImage = "url('imagens/noite03.jpg')";
    }
}

function pegarData() {
    let dataHora = new Date();

    let diaDaSemana = dataHora.getDay(); // Para pegar o dia da semana
    let dia = dataHora.getDate(); // Pegar a data do mês 
    let mes = dataHora.getMonth() + 1; // Como os meses iniciam no 0 colocamos esse +1 para começar no 1 
    let ano = dataHora.getFullYear(); // Pegar o ano em 4 dígitos 

    // Adicionar 2 dígitos para dia e mês
    let strDia = dia.toString().padStart(2, '0'); // O método toString() é usado para converter um número (ou outro tipo de dado) em uma string. o padstart é para adicionar 1 digito a mais aos dias, e meses, pq normalmente eles so aparecem em um digito
    let strMes = mes.toString().padStart(2, '0');

    switch (diaDaSemana) {
        case 0:
            diaDaSemana = 'DOM';
            break;
        case 1:
            diaDaSemana = 'SEG';
            break;
        case 2:
            diaDaSemana = 'TER';
            break;
        case 3:
            diaDaSemana = 'QUA';
            break;
        case 4:
            diaDaSemana = 'QUI';
            break;
        case 5:
            diaDaSemana = 'SEX';
            break;
        case 6:
            diaDaSemana = 'SAB';
            break;                         
    }
    // Concatenando dia, mês e ano junto com barras
    let dataAtual = `${strDia}/${strMes}/${ano}`;

    semana.innerHTML = diaDaSemana;
    data.innerHTML = dataAtual;
}

// Evocar a função
pegarData();
moveRelogio();