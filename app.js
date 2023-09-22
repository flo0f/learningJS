// фильтрация данных
const operations = [100, -20, 7, -20, 50];

// // способ через цикл
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }
// console.log(positiveOperations);

// // способ через метод массива .filter()
// в filter передаем функцию, если она возвращает true, то элемент остается
// и сохраняется в новом массиве, иначе элемент удаляется
// const positiveOperations = operations.filter((operation) => {
//     return operation > 0;
// });
// console.log(positiveOperations);

// // чейнинг методов = использование цепи из методов
const positiveRUBOperations = operations
    .filter((operation) => {
        return operation > 0;                   // .filter вернул массив из положительных транзакций
    })
    .map((operation) => operation * 90);        // .map использовал массим от .filter и перевел USD в RUB
console.log(positiveRUBOperations);
