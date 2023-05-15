const prompt = require("prompt-sync")({ sigint: true });
while (true) {
  let result;

  const number1 = parseFloat(prompt("Enter first number: "));
  const number2 = parseFloat(prompt("Enter second number: "));
  if (isNaN(number1) || isNaN(number2) ) {
    console.log("Invalid number");
    continue;
  }

  const operator = prompt("Enter operator ( either +, -, * or / ): ");

  switch (operator) {
    case "+":
      result = number1 + number2;
      console.log(`${number1} + ${number2} = ${result}`);
      break;

    case "-":
      result = number1 - number2;
      console.log(`${number1} - ${number2} = ${result}`);
      break;

    case "*":
      result = number1 * number2;
      console.log(`${number1} * ${number2} = ${result}`);
      break;

    case "/":
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;

    default:
      console.log("Invalid operator");
      break;
  }
}
