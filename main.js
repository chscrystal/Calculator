
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
    if(num2==0){
        return 'lmao';
    } return num1/num2;
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
    if(display.innerText === '0' && this.id !== '.'){
        display.innerText = this.id;
    } else display.innerText += this.id;  

    if(display.innerText.length>16){
        display.innerText = display.innerText.substring(0,16);
    }  
}


// Decimal Event
const decimalButton = document.getElementById('.');
decimalButton.addEventListener('click', decimalEvent);

function decimalEvent(e){

    if(display.innerText.indexOf('.')== -1){
        display.innerText += '.';
    }

}

// Clear Event
const clear = document.querySelector('#C');
clear.addEventListener('click',clearEvent);

function clearEvent(e){
    display.innerText = display.innerText.slice(0,-1);    
}

// All Clear Event
const allClear = document.querySelector('#AC');
allClear.addEventListener('click',allclearEvent);

function allclearEvent(e){
    display.innerText = 0;
}


// Calculation
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click',runOperation);

function runOperation(e){
    const numEntered = display.innerText;
    console.log(numEntered);
    const operatorRegex = /[+]+|[-]+|[*]+|[/]+/g;
    const numArr = numEntered.split(operatorRegex);
    console.log(numArr);
    const operatorList = numEntered.match(operatorRegex);
    console.log(operatorList)

    while (numArr.length>1) {
        while(operatorList.indexOf('*')>=0|operatorList.indexOf('/')>=0){
            const multidiviIndex = operatorList.findIndex(symbol => /[*]|[/]/.test(symbol));
            console.log(multidiviIndex);
            num1 = Number(numArr[multidiviIndex]);
            num2 = Number(numArr[multidiviIndex+1]);
            const newNum = operate(num1,operatorList[multidiviIndex],num2);
            numArr.splice(multidiviIndex,2,newNum);
            operatorList.splice(multidiviIndex,1);
            console.log(numArr)
            console.log(operatorList)
        }
        while(operatorList.indexOf('+')>=0|operatorList.indexOf('-')>=0){
            num1 = Number(numArr[0]);
            num2 = Number(numArr[1]);
            const newNum = operate(num1,operatorList[0],num2);
            numArr.splice(0,2,newNum);
            operatorList.splice(0,1);
        }
    }
   if(numArr[0].toString().length>16){
       numArr[0] = Number(numArr[0].toString().substring(0,16));
   }
   display.innerText = numArr[0];
}



