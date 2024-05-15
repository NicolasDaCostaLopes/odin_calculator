let first;
let operator;
let second;
const maxNumberSize = 14;
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
            result = add(+first, +second);
            break
        case "substract":
            result = substract(first, second);
            break
        case "multiply":
            result = multiply(first, second);
            break
        case "divide":
            result = divide(first, second);
            break
    }
    updateStoredValues(result, true);
    return result
}
const appendDisplayValue = (value) => {
    if (operator && displayValue.textContent == first) {
        updateStoredValues(displayValue.textContent = value)
        return
    }
    if (displayValue.textContent.length <= maxNumberSize) {
        if (displayValue.textContent == 0) {
            updateStoredValues(displayValue.textContent = value)
            return
        }
        updateStoredValues(displayValue.textContent += value)
    }
}
const changeDisplayValue = (value) => {
    if ((value % 1)) {
        displayValue.textContent = numberDecimalLength(value);
        // Loss of precision here, i don't like it
        first = numberDecimalLength(value);
    } else {
        displayValue.textContent = value
    }
}
const numberDecimalLength = (value) => {
    let length = maxNumberSize - Math.abs(Math.trunc((value / 1)).toString().length);
    return value.toFixed(length);
}
const updateStoredValues = (value, afterOperate) => {
    if (afterOperate) {
        [first, second, operator] = [value, null, null]
        changeDisplayValue(value);
        return
    }
    operator ? second = value : first = value
    console.log(`first : ${first}`)
    console.log(`operator : ${operator}`)
    console.log(`second : ${second}`)
    console.log("\n");

}
const clearCalculator = () => {
    [first, second, operator] = [0, null, null]
    changeDisplayValue(first);
}

const eventHandlerButtons = (e) => {
    if (isNaN(+e.target.value) && e.target.value) {
        if (e.target.value === "add" || e.target.value === "substract" || e.target.value === "multiply" || e.target.value === "divide") {
            if (operator) {
                operate();
            }
            operator = e.target.value
        }
        if (e.target.value === "equal") {
            operate();
        }
        if (e.target.value === "clear") {
            clearCalculator();
        }
    }
    else if (typeof +e.target.value === "number" && !isNaN(+e.target.value)) {
        console.log("clicked")
        appendDisplayValue(e.target.value);
    }

}
calculator.addEventListener("click", eventHandlerButtons);