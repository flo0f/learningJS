const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);

// при .sort() массив модифицируется, а .map и .filter возвращают новый массив
// .sort() без аргументов сортирует по алфавиту как строки
users.sort();
console.log(users);

// тут произойдет сортировка КАК СТРОК, т.е. сначала символы, потом цифры по возрастанию
// поэтому сначала будет идти -100, а потом -300
const operations = [100, -300, -100, 50, 480];
console.log(operations);
operations.sort();
console.log(operations);

// X < 0 - a, b - если вернем, что-то меньше нуля, то порядок сохранен
// X > 0 - b, a - меняем порядок

// сортировка по возрастанию
operations.sort((a, b) => {
    if (a > b) {
        return 1;
    } 
    if (a < b) {
        return -1;
    }
});
console.log(operations);

// сортировка по убыванию
operations.sort((a, b) => {
    if (a < b) {
        return 1;
    } 
    if (a > b) {
        return -1;
    }
});
console.log(operations);

// самая краткая запись сортировки по возрастанию
console.log('---===---===---===---');
operations.sort((a, b) => a - b); // a - b = <0 - сохраняем порядок
console.log(operations);          // a - b = >0 - меняем порядок