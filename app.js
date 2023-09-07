// Типы данных
// Примитивные типы данных
const age = 18; // числа
const surname = 'Иванов'; // строки
const isAdmin = true; // Булевые значение (true / false)
const isMod = undefined;    // Не заданное значение
let data;                   // Не заданное значение
let data1 = null; // пустое значение
const admin = Symbol('Admin'); // Уникальное неизменное значение
const big = BigInt(9999999999999999999999999); // Работа с большими числами

let a = 5;
let b = 5.6;
console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof surname); // string
console.log(typeof isAdmin); // boolean
console.log(typeof isMod); // undefined
console.log(typeof data); // undefined
console.log(typeof data1); // object, хотя присваивалось null
// типа null не существует в typeof