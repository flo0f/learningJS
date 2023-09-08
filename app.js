const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Петров';
// строка созданная с помощью конкатенации
const template = author + ' заказал ' + projectName + ' по цене ' + price;
console.log(template);
// шаблонная строка СОЗДАЕТСЯ С ПОМОЩЬЮ КОСЫХ КАВЫЧЕК ``
const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

// Перенос строки без шаблонной строки
const template3 = 'Проект ' + projectName + '\n' + 'Цена ' + price + '$';
console.log(template3);
// Перенос строки с помощью шаблонной строки
const template4 = `Проект ${projectName}
Цена ${price}$`;
console.log(template4);