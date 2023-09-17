// один из фундаментальных принципов программирования - принцип DRY
// DRY - Do not Repeat Yourself
const tasks = ['Задача 1'];
/*
БЫЛО

function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = task.indexOf(task);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

function Prioritize(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}
*/

// СТАЛО
function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = task.indexOf(task);
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

function Prioritize(task) {
    const result = Remove(task);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
}