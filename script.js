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


function roundToThreeDecimalPlaces(num) {
    // Check if rounding is necessary
    if (Math.round(num * 100) / 100 !== num) {
        return num.toFixed(3);
    }
    // If not, return the number as is
    return num.toString();
}

numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (operatorActual == '') {
            display.textContent = '';
            num1 += number.innerHTML;
            display.textContent += num1;
            console.log("num1", num1);
        } else {
            num2 = '';
            num2 += number.innerHTML;
            display.textContent += num2;
            console.log("num2", num2);
        }
    })
});

operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        // click equal sign 
        if (operator.innerHTML == "=") {
            result = operate(Number(num1), Number(num2), operatorActual);
            result = roundToThreeDecimalPlaces(result);
            console.log("result", result);
            operatorActual = "=";
            display.textContent += operatorActual;
            display.textContent += result;
            num1 = result; 
        } 
        // non-equal sign selected
        else {
            // if previous operator selected was equal sign 
            if (operatorActual == "=") {
                display.textContent = result;
                num2 = "";
            }
            // if previous operator selcted was not equal sign 
            if ((num1 != "") && (num2 !="")) {
                result = operate(Number(num1), Number(num2), operatorActual);
                result = roundToThreeDecimalPlaces(result);
                console.log("result", result);
                display.textContent = result;
                num1 = result; 
            }
            operatorActual = operator.innerHTML;
            display.textContent += operatorActual;
            console.log(operatorActual);          
        }
    })
});

