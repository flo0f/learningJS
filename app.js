
const score = [5, 10, 0, 15];

// обычный способ итерации по массиву
for (const el of score) {
    console.log(`Очки за ${score.indexOf(el) + 1} раунд: ${el}`);
}
// метод .entries возвращает индекс и сам элемент
for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`);
}
console.log('---===---===---===---');
// метод forEach
// X.forEach() принимает функцию, которая будет применена к каждому элементу массива X

// score.forEach(function (el) {
//     console.log(`Очки ${el}`)   // с анонимной функцией
// })

// score.forEach((el) => {
//     console.log(`Очки ${el}`)  // со стрелочной функцией
// })

// const iterator = (el) => {
//     console.log(`Очки ${el}`);   // с отдельно вынесенной функцией
// }
// score.forEach(iterator);

// вторым аргументом функции можно получить индекс элемента массива
// score.forEach((el, i) => {
//     console.log(`Очки за ${i + 1} раунд: ${el}`)
// });

// в .forEach() можно передать и третий аргумент, он будет являтся итерируемым массивом
score.forEach((scoreEl, i, arr) => {
    console.log(`Очки за ${i + 1} раунд: ${scoreEl}, весь список очков ${arr}`);
});
