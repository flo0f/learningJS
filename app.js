/*
    Написать функцию, которая возвращает true,
    если элемент есть, и false, если нет.
*/
const arr = [2, 4, 4, 10, 20];

// // моя реализация
// function some(elToFind, array) {
//     return array.findIndex(el => el === elToFind) < 0 ? false : true;
// }
// console.log(some(5, arr));

// // реализация из видео
// function some(array, element) {
//     const res = array.find(el => el === element);
//     return res == undefined ? false : true;
// }
// console.log(some(arr, 2))

// метод .some()
console.log(arr.some(el => el === 2))