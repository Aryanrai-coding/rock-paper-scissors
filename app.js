
// functions for operation

function add(a, b) {
    return a + b
};

function sub(a, b) {
    return a - b
};

function mul(a, b) {
    return a * b
};

function div(a, b) {
    return a / b
};

// variables for operation

let num1 = '';
let num2 = '';
let operator = '';

// updating display with number and operator and 
// storing them

let display = document.querySelector('.display');
let numButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll('.operation');


for (let numButton of numButtons) {
    numButton.addEventListener('click', () => {
        updateDisplay(numButton.textContent);
    })

}

for (let operatorButton of operatorButtons) {
    operatorButton.addEventListener('click', () => {

        if (num1 && num2 && operator) {

            operate();
            updateOperator(operatorButton.textContent);

        } else {
            updateOperator(operatorButton.textContent);
        }
    })
}


// function for displaying and storing numbers 

function updateDisplay(value) {

    if (value === '.' && display.textContent.includes('.')) {
        return;
    }

    if (!operator) {
        num1 += value
        display.textContent = num1;
    } else {
        num2 += value;
        display.textContent = num2;
    }

}
// function for displaying and storing operator

function updateOperator(value) {

    operator = value;
    display.textContent = num1 + ' ' + operator


}

// running the operate function

let equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    operate();
})

// function for calculating using all the variables

function operate() {

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let result = 0;

    if (operator == '+') {
        result = add(num1, num2);
    } else if (operator == '-') {
        result = sub(num1, num2);
    } else if (operator == '*') {
        result = mul(num1, num2);
    } else if (operator == '/') {
        if (num2 !== 0) {
            result = div(num1, num2);
        } else {
            display.textContent = "Cannot divide by 0";
            return;
        }

    };

    // displaying result rounded to four decimal places
    result = parseFloat(result.toFixed(4));

    display.textContent = result.toString();

    num1 = result.toString();
    num2 = '';
    operator = '';
}

// decimal button 

let decimalButton = document.querySelector('.decimal');

decimalButton.addEventListener('click', () => {
    updateDisplay('.');
}
)


// clearing and resetting everthing on the display 

let clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '0';
})

