let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //document vincula JS con HTML
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo){ //si todos los números ya fueron sorteados
        asignarTextoElemento('p','Se han sorteado todos los números');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) { //si el número sorteado está en la lista
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // # representa un id
}

condicionesIniciales();

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario){ //=== triple igual es que sea el mismo tipo de variable (numbero = numero o string = string) y el valor
        asignarTextoElemento('p', `¡Ha acertado! El número es ${numeroDeUsuario}. Le tomó ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número a adivinar es menor');
        } else {
            asignarTextoElemento('p',"El número a adivinar es mayor");
        }
        intentos++;
        limpiarCaja();
        }
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}