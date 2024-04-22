document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
});

// Funcion para agregar un numero a la entrada actual de la pantalla input
function appendNumber(number) {
    const inputResult = document.getElementById("screen");
    inputResult.value += number;
}
// Funcion para obtener el boton que se esta clickeando y mostrarlo en pantalla input
function handleClick(event) {
    const buttonText = event.target.textContent;
    
    appendNumber(buttonText)
}

function sum(number1, number2) {
    return number1 + number2
}

function substract(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}

function clearScreen() {
    const inputResult = document.getElementById("screen");
    inputResult.value = ''
}