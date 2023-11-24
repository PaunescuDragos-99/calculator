let curentOperator = "0";
let operatorBefore = 0;
let lastSymbol = "";
let lastCalled = "notEqual"
let multiplyWasCalled = false;
let decimalNumber = false;

const screen = document.querySelector(".calculator-screen");

function equation(symbol){
    lastCalled = "notEqual";
    if(operatorBefore == 0){
        operatorBefore += parseFloat(curentOperator);
    }
    if(multiplyWasCalled == true && symbol == "minus" && lastCalled == "Equal"){
        lastSymbol = "multiply-negat";
        screen.textContent = `-`;
        curentOperator = "0";
    }else if(symbol == "plus"){
        lastSymbol = "plus";
        screen.textContent = `+`;
        curentOperator = "0";
        multiplyWasCalled = false;
    }else if(symbol == "multiply"){
        lastSymbol = "multiply";
        screen.textContent = `*`;
        curentOperator = "0";
        multiplyWasCalled = true;
    }else if(symbol == "minus"){
        lastSymbol = "minus";
        screen.textContent = `-`;
        curentOperator = "0";
        multiplyWasCalled = false;
    }else if(symbol == "division"){
        lastSymbol = "division";
        screen.textContent = `/`;
        curentOperator = "0";
        multiplyWasCalled = false;
    }
}

function clean(){
    curentOperator = "0";
    operatorBefore = 0;
    lastCalled = "notEqual"
    screen.textContent = `${operatorBefore}`;
}

function negat(){
    if(curentOperator != 0){
        curentOperator *= (-1);
        screen.textContent = `${curentOperator}`;
    }else{
        operatorBefore *= (-1);
        screen.textContent = `${operatorBefore}`;
    }
}

function deleteValue(){
    if(curentOperator != 0){
        if(curentOperator < 0){
            curentOperator = Math.ceil(curentOperator / 10);
            screen.textContent = `${curentOperator}`;
        }else{
            curentOperator = Math.floor(curentOperator / 10);
            screen.textContent = `${curentOperator}`;
        }
    }else if(operatorBefore < 0){
        operatorBefore = Math.ceil(operatorBefore / 10);
        screen.textContent = `${operatorBefore}`;
    }else{
        operatorBefore = Math.floor(operatorBefore / 10);
        screen.textContent = `${operatorBefore}`;
    }
}

function equal(){
    lastCalled = "equal"
    if(lastSymbol == "plus"){
        operatorBefore += parseFloat(curentOperator);
        curentOperator = "0";
        screen.textContent = `${operatorBefore}`;
        console.log(operatorBefore);
    }else if(lastSymbol == "minus"){
        operatorBefore -= parseFloat(curentOperator);
        curentOperator = "0";
        screen.textContent = `${operatorBefore}`;
    }else if (lastSymbol == "multiply"){
        operatorBefore *= parseFloat(curentOperator);
        curentOperator = "0";
        screen.textContent = `${operatorBefore}`;
    }else if (lastSymbol == "division"){
        operatorBefore /= parseFloat(curentOperator);
        curentOperator = "0";
        screen.textContent = `${operatorBefore}`;
    }else if (lastSymbol = "multiply-negat"){
        operatorBefore *= -parseFloat(curentOperator);
        curentOperator = "0";
        screen.textContent = `${operatorBefore}`;
    }
}

function addDecimal(bool){
    if(bool == true && decimalNumber == false){
        curentOperator += '.';
        decimalNumber = true;
        console.log(decimalNumber);
        console.log("number", curentOperator);
        screen.textContent = `${curentOperator}`;
    }
}

function number(value){
    if(lastCalled == "equal"){
        clean();
    }
    if(curentOperator == "0"){
        curentOperator = "";
        decimalNumber = false;
    }
    curentOperator += value;
    screen.textContent = `${curentOperator}`;
}
