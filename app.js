let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        //condicion else if segundo $
    } else {
        //el ususario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja (){
    document.querySelector ('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  (Math.floor(Math.random()*numeroMaximo)+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya tenemos todos los numeros sortedos
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {

    
        // Si e numero generado esta incluido en la lista hacemos diferente operacion
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function  condicionesIniciales () {
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales ();
    //dejar el boton disabled de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales ();

