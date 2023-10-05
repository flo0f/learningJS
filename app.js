const str = 'Вася ПуПкИн';
console.log(str);
// изменение размера текста
console.log(str.toUpperCase()); // ВСЕ ПРОПИСНЫЕ
console.log(str.toLowerCase()); // все строчные

// замена чего-то в строке
console.log(str.replace('Вася', 'Олег'));
console.log(str.replaceAll('П', 'З'));

const str2 = ' Вася Пупкин     \n';
// удаление лишних пробелов из строки
console.log(str2.trim()); // удаляет с начала и конца
console.log(str2.trimEnd()); // удаляет с конца
console.log(str2.trimStart()); // удаляет с начала
