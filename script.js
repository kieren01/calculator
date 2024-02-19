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

let num1, num2, operatorActual, result;
num1 = '';
num2 = ''; 
operatorActual = '';
result = 0;

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
            if (operatorActual == "=") {
                // num2 = "";
                display.textContent += number.innerHTML;
                num2 += number.innerHTML;
                console.log("num2", num2);              
            } else {
                // num2 = '';
                display.textContent += number.innerHTML;
                num2 += number.innerHTML;
                console.log("num2", num2);               
            }
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
            if ((operatorActual =="÷") && (num2 =="0")) {
                alert("You can't divide by 0!");
            }
            operatorActual = "=";
            display.textContent += operatorActual;
            display.textContent += result;
            num1 = result; 
            num2 = "";
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
                num2 = "";
            }
            operatorActual = operator.innerHTML;
            display.textContent += operatorActual;
            console.log(operatorActual);          
        }
    })
});


clear = document.querySelector('.clear');
clear.addEventListener('click', ()=> {
    num1 = '';
    num2 = '';
    result = 0;
    operatorActual = '';
    display.textContent = '0'; 
});



