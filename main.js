
function Calculate() {
    var number1 = parseInt(document.getElementById("num1").value);
    console.log(number1)
    var number2 = parseInt(document.getElementById("num2").value);
    console.log(number2)
    var operator = document.getElementById("op").value;
    console.log(operator)
    var result = 0;
    if (operator == "+") {
        result = number1 + number2;
    }
    else if (operator == "-") {
        result = number1 - number2;
    }
    else if (operator == "x") {
        result = number1 * number2;
    }
    else if (operator == "/") {

        result = number1 / number2;
    }

    document.getElementById("result-text").innerText = result;

    event.preventDefault();
}