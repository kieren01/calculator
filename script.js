function add(a, b) {
    return a + b;
  };

function subtract(a, b) {
    return a - b;
  };

function multiply(a, b) {
    return a * b; 
  };

function divide(a, b) {
    return a / b;
}

let num1, num2, operatorActual;
num1 = '';
num2 = ''; 
operatorActual = '';

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return(add(num1, num2));
        case '−':
            return(subtract(num1, num2));
        case '×':
            return(multiply(num1, num2));
        case '÷':
            return(divide(num1, num2));
        default:
            return "Invalid operator";
    }
}


let display = document.getElementById('display');




function appendToDisplay(value) {
    if (value ==='0') {
        display.textContent = value;
    }
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// function calculate() {
//     try {
//         display.textContent = eval(display.textContent);
//     } catch (error) {
//         display.textContent = 'Error';
//     }
// }

numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (operatorActual == '') {
            num1 += number.innerHTML;
            console.log("num1", num1);
        } else {
            num2 = '';
            num2 += number.innerHTML;
            console.log("num2", num2);
        }

    })
});

operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operator.innerHTML == "=") {
            result = operate(Number(num1), Number(num2), operatorActual);
            console.log("result", result);
            operatorActual = "=";
            display.textContent += result;
            num1 = result; 
        } else {
            if (operatorActual == "=") {
                num2 = "";
            }
            if ((num1 != "") && (num2 !="")) {
                result = operate(Number(num1), Number(num2), operatorActual);
                console.log("result", result);
                display.textContent = result;
                num1 = result; 
            }
            operatorActual = operator.innerHTML;
            console.log(operatorActual);          
        }
    })
});

