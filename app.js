/*
    Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив
    operations в виде { reason: 'Оплата налогов', sum: -100 }.
    Возвращается true, если успешно и false, если не хватает баланса
    Так же реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    newOperation: function(reason = 'Причина не указана', sum) {
        newBalance = this.balance += sum;
        if (newBalance >= 0) {
            this.balance = newBalance;
            this.operations.push({ reason: String(reason), sum: sum});
            return true;
        } else {
            return false;
        }
    },
    howManyOperations: function() {
        return this.operations.length;
    }
}
console.log(wallet.newOperation('Зарплата', 200));
console.log(wallet.newOperation('Потратил на игру', -15));
console.log(wallet.newOperation('Купил продукты', -50));
console.log(wallet.howManyOperations());
console.log(wallet.operations);
console.log(wallet.balance)