main();

function main() {
  let display = document.querySelector("#display");
  let clearBtn = document.querySelector("#clear");
  let changeSignBtn = document.querySelector("#changeSign");
  let buttons = document.querySelectorAll(".number");
  let operands = document.querySelectorAll(".operand");
  let operateBtn = document.querySelector("#operate");
  let firstNum, operand, secondNum;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (operand && !secondNum) display.textContent = "";

      let num = display.textContent.concat(buttons[i].value);
      display.textContent = num;

      if (!operand) firstNum = parseFloat(num);
      else secondNum = parseFloat(num);

      // console.log(firstNum, secondNum, operand);
    });
  }

  for (let i = 0; i < operands.length; i++) {
    operands[i].addEventListener("click", () => {
      operand = operands[i].value;

      // console.log(firstNum, secondNum, operand);
    });
  }

  clearBtn.addEventListener("click", () => {
    display.textContent = "";
    firstNum = secondNum = operand = null;
  });
  changeSignBtn.addEventListener("click", () => {
    display.textContent = changeSign(display.textContent);
  });
  operateBtn.addEventListener("click", () => {
    switch (operand) {
      case "add":

        break;
      case "subtract":

        break;
      case "multiply":

        break;
      case "divide":

        break;
      case "modulo":

        break;
      default:
        break;
    }
  });
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function changeSign(a) {
  return parseFloat(a) * -1;
}
