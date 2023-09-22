/*
    Найти среднее значение последовательности
    чисел с помощью reduce
*/
const arr = [2, 4, 4, 10];

// // моя реализация
// const avgArr = arr.reduce((prev, current, i) => {
//     if (arr[arr.length - 1] == current) {
//         return (prev + current) / arr.length;
//     } else {
//         return prev + current
//     }
// }, 0);
// console.log(avgArr);

// реализация из видео 
const avg = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);
console.log(avg);