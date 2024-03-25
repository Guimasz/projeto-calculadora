
class Calculadora {
    constructor() {
        this.numDisplay = '0';
        this.ptDecimal = false;
        this.operador = '';
        this.numAnterior='0';
        
    }

    display() {
        return this.numDisplay;
    }

    recebeDigito(dig) {
        if (dig.length != 1) return;
        if (this.numDisplay.length == 10) return;
        // PROVISÓRIO
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (this.numDisplay == '0') {
            this.numDisplay = ' ';    
        }
       
        this.numDisplay += dig;
    }
    
    
}

//-----------------------------------------------------------------------------

let calculadora = new Calculadora();


 function mostrarDisplay() {
    document.getElementById('display').innerHTML = calculadora.display();
}

function addNumber(dig) {
    calculadora.recebeDigito(dig);
    mostrarDisplay();
}

function apagarDig(){
    calculadora.numDisplay = calculadora.numDisplay.slice(0, -1); 
    mostrarDisplay();
}


function addOperator(op) {
    calculadora.operador = op;
    calculadora.numAnterior = calculadora.numDisplay;
    calculadora.numDisplay = '';
    mostrarDisplay();
}

function calcularResultado(){
    let resultado;
    const num1 = parseFloat(calculadora.numAnterior);
    const num2 = parseFloat(calculadora.numDisplay);
    switch(calculadora.operador){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '%':
            resultado = num1 * num2 / 100;

            break;
    }
    calculadora.numDisplay = resultado.toString();
    mostrarDisplay();
}

function limparDisplay(){
    calculadora.numDisplay = '0';
    mostrarDisplay();
}












