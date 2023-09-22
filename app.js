/*
    Имеется массив изменения цен prices, где внутри
    1й элемент массива является ценой в момент X,
    2Й - ценой в момент Y.
    Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен: [100, 150]
*/

const prices = [[100, 200], [120, 100], [200, 350]];

// моя реализация
const positiveChanges = prices
    .map((pricesEl, i) => (pricesEl[1] - pricesEl[0]))
    .filter((priceElAfterMap) => priceElAfterMap > 0);

console.log(positiveChanges);

// реализация из ролика
const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);

console.log(result);