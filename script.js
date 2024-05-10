let first;
let operator;
let second;
const calculator = document.querySelector(".calculator");
const displayValue = document.querySelector(".value")
const add = (a, b) => {
    return a + b
}
const substract = (a, b) => {
    return a - b
}
const multiply = (a, b) => {
    if (b === 0) {
        return "LMAO"
    }
    return a * b
}
const divide = (a, b) => {
    return a / b
}

const operate = () => {
    let result
    switch (operator) {
        case "add":
            result = add(first, second);
        case "substract":
            result = substract(first, second);
        case "multiply":
            result = multiply(first, second);
        case "divide":
            result = divide(first, second);
    }
    [first, second, operator] = [second, null, null]
    changeDisplayValue(result)
    return result
}
const appendDisplayValue = (value) => {
    if (displayValue.textContent.length <= 14) {
        if (displayValue.textContent == 0) {
            updateStoredValues(displayValue.textContent = value)
            return
        }
        updateStoredValues(displayValue.textContent += value)
    }
}
const changeDisplayValue = (value) => {
    displayValue.textContent = value
}
const updateStoredValues = (value) => {
    operator ? second = value : first = value
    console.log(`first : ${first}`)
    console.log(`operator : ${operator}`)
    console.log(`second : ${second}`)
    console.log("\n");

}
const eventHandlerButtons = (e) => {
    if (isNaN(+e.target.value) && e.target.value) {
        if (e.target.value === "add" || e.target.value === "substract" || e.target.value === "multiply" || e.target.value === "divide") {
            operator = e.target.value
            changeDisplayValue(0);
            console.log(operator);
        }
    }
    else if (typeof +e.target.value === "number" && !isNaN(+e.target.value)) {
        appendDisplayValue(e.target.value);
    }

}
calculator.addEventListener("click", eventHandlerButtons);