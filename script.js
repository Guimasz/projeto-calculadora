
class Calculadora {
    constructor() {
        this.numDisplay = '0';
    }

    mostrarResultado() {
        return this.numDisplay;
    }

    
}

//----------------------------------------------

let calculadora = new Calculadora();
calculadora.numDisplay = '123';

function mostrarResultado() {
    document.getElementById('display').innerHTML = calculadora.mostrarResultado();
}

mostrarResultado();










