
class Calculadora {
    constructor() {
        this.numDisplay = '0';
        this.ptDecimal = false;
        this.operador = '';
        this.numAnterior = '';
        this.estadoErro = false;
        this.memoria = 0;
        this.estadoLigada = false;


        if (this.estadoLigada == false) {
            document.getElementById('display').innerHTML = '';
            this.numDisplay = '';
            this.ptDecimal = false;
            this.operador = '';
            this.numAnterior = '';
            this.estadoErro = false;
            this.memoria = 0;
            this.estadoLigada = false;

        }

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

function on_off() {
    calculadora.estadoLigada = !calculadora.estadoLigada;
    if (calculadora.estadoLigada) {
        document.getElementById('display').innerHTML = '0';
        calculadora.numDisplay = '0';
        calculadora.ptDecimal = false;
        calculadora.operador = '';
        calculadora.numAnterior = '';
        calculadora.estadoErro = false;
        calculadora.memoria = 0;
    } else {
        document.getElementById('display').innerHTML = '';
        calculadora.numDisplay = '0';
    }
}

function mostrarDisplay() {
    if (calculadora.estadoLigada == false) return;

    document.getElementById('display').innerHTML = calculadora.display();
}

function addNumber(dig) {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    calculadora.recebeDigito(dig);
    mostrarDisplay();
}


function addOperator(op) {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    if (calculadora.operador !== '') {
        calcularResultado();
    }
    if (this.estadoErro) return;
    calculadora.operador = op;
    calculadora.numAnterior = calculadora.numDisplay;

    cleanDisplay();
}

function calcularResultado() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    if (calculadora.operador == '') return;

    if (calculadora.numDisplay === '') {
        if (calculadora.numAnterior !== '') {
            calculadora.numDisplay = calculadora.numAnterior;
            mostrarDisplay();
            return;
        } else {
            return;
        }
    }
    
    let resultado;
    const num1 = parseFloat(calculadora.numAnterior);
    const num2 = parseFloat(calculadora.numDisplay);
    switch (calculadora.operador) {
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
            if (num2 == 0) {
                calculadora.estadoErro = true;
                calculadora.numDisplay = 'Erro';
                mostrarDisplay();
                return;
            }
            resultado = num1 / num2;
            break;
        case '%':
            resultado = num1 * (num2 / 100);
            break;
    }

    calculadora.operador = '';
    calculadora.ptDecimal = false;
    calculadora.numAnterior = '';
    calculadora.numDisplay = String(resultado).slice(0, 10);
    mostrarDisplay();
}

function quadrado() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    const num = parseFloat(calculadora.numDisplay);
    if (isNaN(num)) return;

    calculadora.numDisplay = (num * num).toString();


    calculadora.numDisplay = calculadora.numDisplay.slice(0, 10);
    mostrarDisplay();
}

function raizOperator() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;

    const num = parseFloat(calculadora.numDisplay);
    if (isNaN(num)) return;

    calculadora.numDisplay = Math.sqrt(num).toString();


    calculadora.numDisplay = calculadora.numDisplay.slice(0, 10);
    mostrarDisplay();

}



function inverso() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    if (calculadora.numDisplay == '0') {
        calculadora.estadoErro = true;
        calculadora.numDisplay = 'Erro';
        mostrarDisplay();
        return;
    }
    calculadora.numDisplay = 1 / parseFloat(calculadora.numDisplay);
    calculadora.numDisplay = calculadora.numDisplay.toString();
    calculadora.numDisplay = calculadora.numDisplay.slice(0, 10);

    mostrarDisplay();
}


function cleanAll() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    calculadora.numDisplay = 0;
    calculadora.ptDecimal = false;
    calculadora.operador = '';
    calculadora.numAnterior = 0;
    mostrarDisplay();
}

function teclaMmais() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
   
    calculadora.memoria += parseFloat(calculadora.numDisplay);
  
    
}
function teclaMmenos() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;

    
    calculadora.memoria -= parseFloat(calculadora.numDisplay);
   
    

}

function teclaCLM() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    calculadora.memoria = 0;
}

function teclaRM() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    calculadora.numDisplay = calculadora.memoria;
    mostrarDisplay();
}

function cleanDisplay() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    let count = calculadora.numDisplay.split(0);
    calculadora.numDisplay = 0;
    mostrarDisplay();
}

function switchSignal() {
    if (calculadora.estadoLigada === false || calculadora.estadoErro) return;
    calculadora.numDisplay = -parseFloat(calculadora.numDisplay);
    mostrarDisplay();
}

//-----------------------------------------------------------------

    function handleKeyPress(event) {
        const isShift = event.shiftKey;
    
        if (isShift) {
            // Lidar com teclas pressionadas junto com Shift
            if (event.key === 'M') {
                teclaMmenos();
            } else if (event.key === 'C') {
                teclaCLM();
            } else if (event.key === '+') {
                addOperator('+');
            } else if (event.key === '-') {
                addOperator('-');
            } else if (event.key === '*') {
                addOperator('*');
            } else if (event.key === '/') {
                addOperator('/');
            } else if (event.key === '%') {
                addOperator('%');
            }        
        } else {
            // Lidar com teclas pressionadas sem Shift
            if (event.key >= '0' && event.key <= '9') {
                addNumber(event.key);
            } else if (event.key === '.') {
                addNumber('.');
            } else if (event.key === '+') {
                addOperator('+');
            } else if (event.key === '-') {
                addOperator('-');
            } else if (event.key === '*') {
                addOperator('*');
            } else if (event.key === '/') {
                addOperator('/');
            } else if (event.key === '%') {
                addOperator('%');
            } else if (event.key === 'Enter') {
                calcularResultado();
            } else if (event.key === 'Backspace') {
                cleanDisplay();
            } else if (event.key === 'Delete') {
                cleanAll();
            } else if (event.key === 'm') {
                teclaMmais();
            } else if (event.key === 'z') {
                switchSignal();
            } else if (event.key === 'r') {
                teclaRM();
            } else if (event.key === 'q') {
                quadrado();
            } else if (event.key === 'i') {
                inverso();
            } else if (event.key === 's') {
                raizOperator();
            }
        }
    }
    
    document.addEventListener('keydown', handleKeyPress);