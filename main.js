
// +-*/
function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}


// Operate
function operate(num1,operator,num2){
    if(operator == '+'){
        return add(num1,num2);
    } else if(operator == '-'){
        return subtract(num1,num2);
    } else if(operator == '*'){
        return multiply(num1,num2);
    } else if(operator == '/'){
        return divide(num1,num2);
    }
}


// Display Number
const digit = document.querySelectorAll('.digit');
digit.forEach(button=>button.addEventListener('click',displayEvent));
const display = document.querySelector('p');

function displayEvent(e){
    display.innerText += this.id;    
}


// Clear Event
const clear = document.querySelector('#C');
clear.addEventListener('click',clearEvent);

function clearEvent(e){
    display.innerText = display.innerText.slice(0,-1);    
}



const equalButton = document.getElementById('=');
equalButton.addEventListener('click',runOperation);

function runOperation(e){
    const numEntered = display.innerText;
    console.log(numEntered);
    const operatorRegex = /[+]|[-]|[*]|[/]/;
    num1 = Number(numEntered.split(operatorRegex)[0]);
    num2 = Number(numEntered.split(operatorRegex)[1]);
    operator = numEntered.match(operatorRegex);

   display.innerText = operate(num1,...operator,num2);
}



