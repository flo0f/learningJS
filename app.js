/*
    Задача вывести в консоль строку "Я люблю JS !" из массива,
    проходя циклом в обратном порядке, не используя метод reverse.
    const arr = ['!', 'JS', 'люблю', 'Я'];
*/
const arr = ['!', 'JS', 'люблю', 'Я'];

// реализация 1
const resArr1 = [];
for(let i = -1; i >= -arr.length; i--) {
    resArr1.push(arr.at(i));
}
console.log(resArr1.join(' '));

// реализация 2
const resArr2 = [];
for(let i = 1; i <= arr.length; i++) {
    resArr2.push(arr[arr.length - i]);
}
console.log(resArr2.join(' '));
