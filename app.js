// вывод всех элементов цикла
const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5'];
for(let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}
console.log('========================');
// управление поведением цикла с помощью break и continue

// continue - останавливает выполнение блока цикла и переходит к следующей итерации
for(let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        console.log(`${tasks[i]} пропущена, цикл продолжается без её вывода`);
        continue;
    }
    console.log(tasks[i]);
}
console.log('========================');

// break - принудительно останавливает цикл и выходит из него
for(let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        console.log(`На '${tasks[i]}' остановлено выполнение цикла`);
        break;
    }
    console.log(tasks[i]);
}