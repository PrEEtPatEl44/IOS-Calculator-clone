let display = document.querySelector("#result");
function show(input) {
  display.value += input;
}
function clearD() {
  display.value = "";
}
function calculate() {
  try {
    const result = evalExpression(display.value);

    display.value = result;

    return result;
  } catch (error) {
    display.value = "Error";
    return "Error";
  }
}

function evalExpression(expression) {
  const tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*|\/|%)/g);

  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
      case "%":
        result %= operand;
        break;
    }
  }

  return result;
}
