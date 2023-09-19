/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
        баланс < 0, то выдавать false)
    - Расчета среднего расхода и дохода
*/
const operations = [1000, -700, 300, -500, 10000];
const balance = 100;
// Итоговый баланс
function totalBalance(bal = 0) {
    for (let i = 0; i < operations.length; i++) {
        bal += operations[i];
    }
    return bal;
}
console.log(totalBalance(balance));
// Был ли отрицательный баланс
function belowZero(bal = 0) {
    for (let index in operations) {
        bal += operations[index];
        if (bal < 0) {
            return false;
        }
    }
    return true;
}
console.log(belowZero(balance));
// Средний расчет и доход

function average(bal = 0) {
    let income = 0;
    let waste = 0;
    let i = 0;
    let j = 0;
    for (let element of operations) {
        if (element > 0) {
            income += element;
            i++;
        } else {
            waste += element;
            j++;
        }
    }
    return `Средний доход: ${income / i}
Средние траты: ${waste / j}`;
}
console.log(average(balance));