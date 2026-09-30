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
    return a / b
}

function operate(operator,a,b){
    if(operator === '+'){
        console.log(add(a,b))
    }else if(operator === '-'){
        console.log(subtract(a,b))
    }else if(operator === '*'){
        console.log(multiply(a,b))
    }else if(operator === '/'){
        console.log(divide(a,b))
    }else{
        console.log('Invalid Operator Input')
    }
}

operate('+',5,3)