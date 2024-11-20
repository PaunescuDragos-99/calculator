let curentOperator = "0";
let operatorBefore = 0;
let lastSymbol = "";
let lastCalled = "notEqual";
let multiplyWasCalled = false;
let decimalNumber = false;
let inputZero = false;

// TEST
const TEST = "TEST ";

const screenInfo = document.querySelector(".current-info");
const pastInfo = document.querySelector(".past-info");

function equation(symbol) {
  if (lastCalled != "equal" && operatorBefore != 0) {
    if (
      ((lastSymbol == "multiply" && curentOperator == 0) ||
        (lastSymbol == "division" && curentOperator == 0)) &&
      inputZero == false
    ) {
      curentOperator = 1;
      equal();
      console.log(curentOperator, lastSymbol, "1");
    } else if (
      lastSymbol == "multiply-negat" &&
      curentOperator == 0 &&
      inputZero == false
    ) {
      curentOperator = -1;
      equal();
      console.log(curentOperator, lastSymbol, "2");
    } else {
      equal();
      console.log(curentOperator, lastSymbol, "3");
    }
  }

  if (operatorBefore == 0) {
    operatorBefore += parseFloat(curentOperator);
    pastInfo.textContent = `${operatorBefore}`;
  }
  if (symbol == "plus") {
    lastSymbol = "plus";
    screenInfo.textContent = `+`;
    curentOperator = "0";
    multiplyWasCalled = false;
    pastInfo.textContent = `${operatorBefore} + `;
  } else if (symbol == "multiply") {
    lastSymbol = "multiply";
    screenInfo.textContent = `*`;
    curentOperator = "0";
    multiplyWasCalled = true;
    pastInfo.textContent = `${operatorBefore} * `;
  } else if (symbol == "minus") {
    lastSymbol = "minus";
    screenInfo.textContent = `-`;
    curentOperator = "0";
    pastInfo.textContent = `${operatorBefore} - `;
    if (multiplyWasCalled == true && lastCalled == "equal") {
      lastSymbol = "multiply-negat";
      screenInfo.textContent = `-`;
      pastInfo.textContent = `${operatorBefore} * (- ) `;
    }
    multiplyWasCalled = false;
  } else if (symbol == "division") {
    lastSymbol = "division";
    screenInfo.textContent = `/`;
    curentOperator = "0";
    multiplyWasCalled = false;
    pastInfo.textContent = `${operatorBefore} / `;
  }
  lastCalled = "notEqual";
}

function clean() {
  curentOperator = "0";
  operatorBefore = 0;
  lastCalled = "notEqual";
  screenInfo.textContent = `${operatorBefore}`;
  pastInfo.textContent = ` `;
}

function negat() {
  if (curentOperator != 0) {
    curentOperator *= -1;
    screenInfo.textContent = `${curentOperator}`;
  } else {
    operatorBefore *= -1;
    screenInfo.textContent = `${operatorBefore}`;
  }
}

function deleteValue() {
  if (curentOperator != 0) {
    if (curentOperator < 0) {
      curentOperator = Math.ceil(curentOperator / 10);
      screenInfo.textContent = `${curentOperator}`;
    } else {
      curentOperator = Math.floor(curentOperator / 10);
      screenInfo.textContent = `${curentOperator}`;
    }
  } else if (operatorBefore < 0) {
    operatorBefore = Math.ceil(operatorBefore / 10);
    screenInfo.textContent = `${operatorBefore}`;
  } else {
    operatorBefore = Math.floor(operatorBefore / 10);
    screenInfo.textContent = `${operatorBefore}`;
  }
}

function equal() {
  lastCalled = "equal";
  if (lastSymbol == "plus") {
    operatorBefore += parseFloat(curentOperator);
    curentOperator = "0";
    screenInfo.textContent = `${operatorBefore}`;
    pastInfo.textContent = `${operatorBefore}`;
    console.log(operatorBefore);
  } else if (lastSymbol == "minus") {
    operatorBefore -= parseFloat(curentOperator);
    curentOperator = "0";
    pastInfo.textContent = `${operatorBefore}`;
    screenInfo.textContent = `${operatorBefore}`;
  } else if (lastSymbol == "multiply") {
    operatorBefore *= parseFloat(curentOperator);
    curentOperator = "0";
    pastInfo.textContent = `${operatorBefore}`;
    screenInfo.textContent = `${operatorBefore}`;
  } else if (lastSymbol == "division") {
    if (curentOperator == 0) {
      screenInfo.textContent = "ERROR!";
    } else {
      operatorBefore /= parseFloat(curentOperator);
      curentOperator = "0";
      pastInfo.textContent = `${operatorBefore}`;
      screenInfo.textContent = `${operatorBefore}`;
    }
  } else if ((lastSymbol = "multiply-negat")) {
    operatorBefore *= -parseFloat(curentOperator);
    curentOperator = "0";
    pastInfo.textContent = `${operatorBefore}`;
    screenInfo.textContent = `${operatorBefore}`;
    multiplyWasCalled = false;
  }
}

function addDecimal(bool) {
  if (bool == true && decimalNumber == false) {
    curentOperator += ".";
    decimalNumber = true;
    screenInfo.textContent = `${curentOperator}`;
  }
}

function number(value) {
  if (lastCalled == "equal") {
    clean();
  }
  if (curentOperator == "0") {
    curentOperator = "";
    decimalNumber = false;
  }
  if (value == "0") {
    curentOperator += value;
    screenInfo.textContent = `${curentOperator}`;
    inputZero = true;
  } else {
    curentOperator += value;
    screenInfo.textContent = `${curentOperator}`;
    inputZero = false;
  }
}
