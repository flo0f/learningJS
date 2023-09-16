// знакомство с массивами
const role1 = 'admin';
const role2 = 'user';
const role3 = 'super user';
// массив обозначается с помощью []
const roles = ['admin', 'user', 'super user']

// массив может содержать несколько типов данных
const userInfo = ['Леша', 25];
console.log(roles);

// индексы значений в массиве начинаются с нуля
// получить нужное значение можно по его индексу
console.log(roles[0]);

// если обратиться к несуществующему индексу, то будет undefined т.к. его нет
console.log(roles[3]);

// с помощью метода .length можно получить длинну массива
console.log(roles.length);
// что бы получить последний элемент массива, нужно .length - 1
console.log(roles[roles.length - 1]);

// обратиться к элементу так же можно при помощи метода .at, но он используется редко
console.log(roles.at(0)); 
// преимущество .at в наличии отрицательных индексов, например вот получение последнего элемента массива
console.log(roles.at(-1));

// внутри массива можно использовать тернарные операторы и математические выражения
const usersAge = [2040 - 2022, 20 - '6', 10 > 5 ? 'Десять больше' : 'Десять меньше'];
console.log(usersAge);

// другой вариант записи массива
const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function square(el) {
	return el * el;
}

console.log(square(5));
console.log(square([1, 2, 3]));