document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const inputResult = document.getElementById("screen");
    let number1 = '';
    let number2 = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;
            inputResult.value += buttonText;

            if (isInteger(buttonText)) {
                if (operator === '') {
                    number1 += buttonText;
                } else {
                    number2 += buttonText;
                }

            } else if (isOperator(buttonText)) {
                operator = buttonText;

            } else if (buttonText == '=') {
                let results = '';
                switch (operator) {
                    case '+':
                        results = number1 + number2;
                        break;
                    case '-':
                        results = number1 - number2;
                        break;
                    case '*':
                        results = number1 * number2;
                        break;
                    case '/':
                        results = number1 / number2;
                        break;
                    default:
                        break;
                }

                inputResult.value = results.toString();

                number1 = '';
                number2 = '';
                operator = '';
            }
        });
    });
});

// Funcion para agregar un numero a la entrada actual de la pantalla input
function appendNumber(number) {
    const inputResult = document.getElementById("screen");
    inputResult.value += number;
}

// Funcion para obtener el valor del boton que se esta clickeando y mostrarlo en pantalla input
function handleClick(event) {
    const buttonText = event.target.textContent;
    appendNumber(buttonText);
}

function clearScreen() {
    const inputResult = document.getElementById("screen");
    inputResult.value = '';
}

function isOperator(operator) {
    return ['+', '-', '*', '/'].includes(operator);
}

function isInteger(text) {
    return /^\d+$/.test(text);
}

