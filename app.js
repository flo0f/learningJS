// false из других типов данных
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
let a // a = undefined
console.log(Boolean(a)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(Boolean(Number('sx'))); // Сначала выполняется Number, получаем NaN т.к.
                                    // sx не число, поэтому Boolean(NaN) = false