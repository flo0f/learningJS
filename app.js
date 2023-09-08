// Конвертация в число, обязательно Number, не number
const age = '18';
console.log(Number(age) + 5);
console.log(age - 3); // '-' '/' '*' не требует Number()

const userName = 'Вася';
console.log(Number(userName) + 5); // NaN = Not a Number
console.log(userName - 5); // Также NaN
console.log(typeof NaN); // number

// Конвертация в строки String()
console.log(String(4) + 7);

// Конвертация в Булевое значение(true/false) Boolean()
console.log(Boolean(1)); // true любое число кроме нуля будет истина
console.log(Boolean(0)); // false нуль будет ложь
console.log(Boolean(' ')); // true т.к. в строке есть хотя бы один символ
console.log(Boolean('')); // false т.к. строка пустая
// Булевое значение можно использовать как число
console.log(Boolean('') + 10); // =10 булевый false = 0
console.log(Boolean('') + 10); // =11 булевый true = 1