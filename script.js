
class Calculadora {
    constructor() {
        this.numDisplay = '0';
        this.ptDecimal = false;
        this.operador = '';
        this.numAnterior='';
        this.estadoErro = false;
        this.memoria = 0;
        

        
    }

    display() {
        return this.numDisplay;
    }

    recebeDigito(dig) {
        if (this.estadoErro) return;
        if (dig.length != 1) return;
        if (this.numDisplay.length == 10) return;
        if ((dig < '0' || dig > '9') && dig != '.') return;
            if (this.numDisplay == '0') {
                this.numDisplay = dig == '.' ? '0.' : dig;
            } else {
                this.numDisplay += dig;
            }      
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
    let count = calculadora.numDisplay.split("");
    calculadora.numDisplay = calculadora.numDisplay.slice(0, -count); 
    mostrarDisplay();
}


function addOperator(op) {
    if (calculadora.operador != '') {
        calcularResultado();
    }   
    if (this.estadoErro) return;
    calculadora.operador = op;
    calculadora.numAnterior = calculadora.numDisplay;
    
    limparDisplay();
}

function calcularResultado(){
    if (calculadora.operador == '') return;
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
    calculadora.operador = '';
    calculadora.ptDecimal = false;
    calculadora.numAnterior = '';
    calculadora.numDisplay = String(resultado).slice(0, 10);
    mostrarDisplay();
}

function limparDisplay(){
    calculadora.numDisplay = '';
    mostrarDisplay();
}












