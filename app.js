/* отсортировать пользователей по возрасту */

const users = [
    { name: 'Вася', age: 30},
    { name: 'Катя', age: 18},
    { name: 'Аня', age: 40},
    { name: 'Петя', age: 25},
];
const res = users.sort((prev, next) => {
    if (prev.age > next.age) return 1;
    if (prev.age == next.age) return 0;
    if (prev.age < next.age) return -1; 
});
console.log(res)

// реализация из урока
console.log(users.sort((a, b) => a.age - b.age));