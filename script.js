let firstOperand = ""
let currentOperator = ""
let nextOperand = ""

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".keypad button")

display.textContent = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent

        if(value === "Clear"){
            firstOperand = ""
            currentOperator = ""
            nextOperand = ""
            display.textContent = ""
            return
        }

        if(value === "="){
            if(firstOperand && currentOperator &&nextOperand){
                const num1 = Number(firstOperand);
                const num2 = Number(nextOperand);
                const result = operate(currentOperator, num1, num2);
                    
                display.textContent = result;
                
                //chaining
                firstOperand = result.toString();
                currentOperator = "";
                nextOperand = "";
            }
            return
        }
        if(value === "+" || value === "-" || value === "×" || value === "÷"){
            if(firstOperand){
                currentOperator = value

                display.textContent = `${firstOperand} ${currentOperator}`
            }
            return
        }

        if(!currentOperator) {
            firstOperand += value
            display.textContent = firstOperand
        }else{
            nextOperand += value
            display.textContent = `${firstOperand} ${currentOperator} ${nextOperand}`
        }
    })
})

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    if(b === 0){
        return "Error"
    }else{
        return a / b
    }
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if(operator === '×'){
        return multiply(a,b)
    }else if(operator === '÷'){
        return divide(a,b)
    }else {
        return 'Invalid Operator Input';
    }
}
