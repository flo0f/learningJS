/*
    Дан список задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задачи в конец
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

const addTask = (mas, taskName) => mas.push(taskName);
const delTask = (mas, taskName) => {
    if (mas.includes(taskName)) {
        mas.splice(mas.indexOf(taskName), 1);
        return `Элемент "${taskName}" успешно удален!`;
    } else {
        return `Элемента с именем "${taskName}" не существует!`;
    }
}
const moveTask = (mas, taskName) => {
    if (mas.includes(taskName)) {
        const element = mas.splice(mas.indexOf(taskName), 1);
        mas.unshift(element[0]);
        return `Элемент "${taskName}" успешно перенесён!`;
    } else {
        return `Элемента с именем "${taskName}" не существует!`;
    }
}
addTask(tasks, 'Задача 2');
console.log(tasks);
addTask(tasks, 'Задача 3');
console.log(tasks);
addTask(tasks, 'Задача 4');
console.log(tasks);

console.log(delTask(tasks, 'Задача 1'));
console.log(tasks);

console.log(moveTask(tasks, 'Задача 4'));
console.log(tasks);

console.log(moveTask(tasks, 'Задача 7-8'));
console.log(tasks);


