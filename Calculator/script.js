const display = document.getElementById('calc-result');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    }
    else {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    }
    else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    // const text = display.textContent;
    // const firstChar =  text[0];
    // if(text.length === 1 && firstChar === '0'){
    //     display.textContent = '';
    //     display.textContent += operator;
    // }
    if (!['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.textContent += operator;
    }
    {
        deleteLast();
        display.textContent += operator;
    }
}

function appendDot() {
    const currentText = display.textContent;
    if (!currentText.includes('.')) {
        display.textContent += '.';
    }
}

function calcRoot() {
    const num = parseFloat(display.textContent);
    display.textContent = Math.sqrt(num).toFixed(12);
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent).toString();
    } catch {
        display.textContent = 'Error';
    }
}
