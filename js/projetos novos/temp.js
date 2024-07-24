// input range 
let celsius = document.getElementById('celsius')
let fahrenheit = document.getElementById('fahrenheit')
let kelvin = document.getElementById('kelvin')

//input number
let numeroC = document.getElementById('numeroC')
let numeroF = document.getElementById('numeroF')
let numeroK = document.getElementById('numeroK')

numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value

function atualizaC() {
    numeroC.value = celsius.value
    atualizaF();
    atualizaK()
}

/* FORMULAS DE CONVERSÃO

celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

*/

function atualizaF() {
    let celsius_fahrenheit = parseFloat(celsius.value * 9/5) + 32
    numeroF.value = parseFloat(celsius_fahrenheit).toFixed(2)
    fahrenheit.value = parseFloat(celsius_fahrenheit).toFixed(2)
}

function atualizaK() {
    let celsius_kelvin = parseFloat(celsius.value) + 273.00
    numeroK.value = parseFloat(celsius_kelvin).toFixed(2)
    kelvin.value = parseFloat(celsius_kelvin).toFixed(2)
}

function zerar() {
    celsius.value = 0.0
    numeroC.value = celsius.value
    atualizaF();
    atualizaK()
}

atualizaC()

/* atualizaC(): Atualiza o valor do input number do Celsius e chama as funções atualizaF() e atualizaK() para atualizar os sliders e os valores de Fahrenheit e Kelvin.
atualizaF(): Converte o valor do Celsius para Fahrenheit, atualizando tanto o input number quanto o slider de Fahrenheit.
atualizaK(): Converte o valor do Celsius para Kelvin, atualizando tanto o input number quanto o slider de Kelvin.
zerar(): Redefine o slider do Celsius para 0.0 e atualiza os valores de Fahrenheit e Kelvin de acordo. */