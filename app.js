const userName = "Вася Пупкина";
// обращение к определенным символам по индексу
// эмодзи в строке занимают два индекса
console.log(userName[0]);
console.log(userName.charAt(0));

// получение длины строки
console.log(userName.length);

// поиск в строке
console.log(userName.indexOf('а')); // первое вхождение символа
console.log(userName.lastIndexOf('а')); // последнее вхождение символа
console.log(userName.includes('Вася'));

// получение части строки
console.log(userName.slice(5, 8));