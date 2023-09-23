const arr = [2, 4, 4, 10];


let elGT5;
// // обычный способ
// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el;
//         break;
//     }
// }
// console.log(elGT5);

// через метод .find()
// .find() ищет первый элемент массива удовлетворяющий условию
elGT5 = arr.find(el => el > 5);
console.log(elGT5);

// .findIndex() ищет индекс первого элемента массива который удовлетворяет условию
let elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5Index);
// если в массиве нет элемента удовлетворяющего условию, то .findIndex() вернёт -1