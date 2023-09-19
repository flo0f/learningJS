for (let i = 1; i < 5; i++) {
    console.log(`Цикл внешний: i = ${i}`);
    for (let j = 1; j < 5; j++) {
        console.log(`Цикл внутренний: j = ${j} i = ${i}`);
    }
}
console.log('===---===---===---===---===')

const tasks = [[1, 'Задача 1'], [2, 'Задача 2']];
for (let i = 0; i < tasks.length; i++) {
    for (let j = 0; j < tasks[i].length; j++) {
        console.log(tasks[i][j]);
    }
}