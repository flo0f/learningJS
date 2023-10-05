/* вытащить имя и фамилию в отдельные переменные */
const userName = 'Вася aka Terminator Пупкин';
const firstName = userName.slice(0, 4);
const surname = userName.slice(-6);
console.log(firstName, surname);

// реализация из урока
const firstName1 = userName.slice(0, userName.indexOf(' '));
const surname1 = userName.slice(userName.lastIndexOf(' ') + 1, userName.length);
console.log(firstName1, surname1);