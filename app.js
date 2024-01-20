let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados= [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{ 
        if(numeroUsuario < numeroSecreto){
        asignarTextoElemento("p","El número es mayor");
    }else{
        asignarTextoElemento("p","El número es menor");
    }
    intentos++;
    limpiarCaja();
}
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numeroMaximo == numerosSorteados.length){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")
    }else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();

