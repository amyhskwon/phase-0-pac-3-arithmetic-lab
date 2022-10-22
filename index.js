function add() {};
function subtract() {};
function multiply() {};
function divide() {};

function add() {
    return "somethign";
}

function add(a, b) {
    return "something";
}

function add(a, b) {
    return a + b;
}

function subtract() {
    return "something"
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

function makeInt(n) {
    if (n < 0) {
        return 0;
    }
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}