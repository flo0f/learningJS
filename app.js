const transactionsInUSD = [10, -7, 50, -10, 100];
// процедурный стиль написания
const transactionsInRUB = [];
for (const transactions of transactionsInUSD) {
    transactionsInRUB.push(transactions * 60);
}

console.log(transactionsInRUB);
console.log(transactionsInUSD);

// функциональный стиль
// .map() принимает в аргументы то же, что и .forEach(), а именно
// .map(callbackFn (value, index, array))
// .map() в отличии от forEach возвращает массив с элементами исходного к которым применена функция из (...) map'a
const transactionsInRUB2 = transactionsInUSD
    .map((transactions) => transactions * 60); // методы можно переносить
console.log('---===---===---===---');
console.log(transactionsInRUB2);
console.log(transactionsInUSD);


