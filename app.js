function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

// функция высшего порядка
// функция, которая передается в другую - callback function
function calculate(a, b, func) {
    console.log(func.name);
    const res = func(a, b);
    return res;
}

let res = calculate(3, 5, subtract);
console.log(res);

res = calculate(3, 5, add);
console.log(res);

res = calculate(3, 5, power);
console.log(res);