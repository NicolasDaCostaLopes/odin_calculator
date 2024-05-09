let first;
let operator;
let second;
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

const operate = (a, b, operation) => {
    switch (operation) {
        case "add":
            return add(a, b);
        case "substract":
            return substract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}