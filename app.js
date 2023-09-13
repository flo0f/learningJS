console.log('Вася' || 'Олег'); // при ИЛИ всегда выводится первое значение если оно равно true
console.log('' || 'Олег'); // Boolean('') === false, соответственно выводим 'Олег', т.к. эта строка не пустая
console.log('Вася' || false);


console.log('Вася' && 'Олег'); // выведет второе значение, если первое === true
console.log(false && 'Олег'); // выведет false т.к. проверка остановлена и выведено первое значение
console.log('' && false); // Boolean('') === false, выводится пустая строка, а не false т.е. проверка остановлена

let a;
const username = a || 'Петя';
console.log(username); // если значение А пустое, то выведется Петя

const isAdmin = true;
const fileName = isAdmin && 'Музыка.mp4'; // имя файла может вернуться только если пользователь АДМИН
console.log(fileName);