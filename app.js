// reduce - сужает массив до конкретного значения
const operations = [100, -20, 7, -30, 50];

// // реализация обычная
// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// }
// console.log(balance);

// через метод .reduce()
const finalBalance = operations.reduce((acc, value, i) => {    // acc = accumulator
    console.log(`Итерация ${i}. Аккумулятор = ${acc}, следующее значение ${value}`)
    return acc += value;
}, 0);
console.log(finalBalance);
// iter 0 - acc = 0, value = 100
// iter 1 - acc = будет равен тому, что возвращено из функции, т.е. 100, value = -20
// iter 2 - acc = 80, value = 7
// iter 3 - acc = 87, value = -30
// iter 4 - acc = 57, value = 50
// iter 5 - acc = 107, value = undefined

// найдем минимальный элемент из списка
const numbers = [1, 4, 6, 7, 4, 3, 9, -5];

// первый аргумент - функция, второй аргумент - значение, которое заменяется при выполнении условия
const minElement = numbers.reduce((accumulator, num) => {   // .reduce((предыдущееЗначение, следующееЗначение))
    if (num > accumulator) {                                // если следующее больше предыдущего, то оставляем пред.
        return accumulator;
    } else {                                                // иначе предыдущее стает следующем
        return num;
    } 
}, 0); 
console.log(minElement);