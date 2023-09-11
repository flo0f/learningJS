// Тернарные операторы
const bmwX3Price = 100000;
const budget = 20000;
const fordFocusPrice = 10000;

let message;

if (budget > bmwX3Price) {
    message = 'BMW';
} else {
    message = 'Велик';
}
                                        // Если переменную message не объявить вне условия
console.log(`Я хочу купить ${message}`); // выдаст ошибку т.к. область видимости message
                                        // только внутри блока if-else if-else
// Простой пример тернарного оператора
10 > 0 ? console.log('Больше нуля') : console.log('Меньше нуля');
/*
Соответствует записи
if (10 > 0) {
    console.log('Больше нуля');
} else {
    console.log('Меньше нуля');
}
*/
// Можно присвоить это выражение в переменную
const str = 10 > 0 ? 'Больше нуля' : 'Меньше нуля';
console.log(str);
// т.к. эта запись является выражением, то можно ее напрямую встроить в шаблонную строку
// на примере первой записи if-else
console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW X3' : 'Велосипед'}`);
// Можно написать несколько условий внутри одного выражения
console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW X3' : budget > fordFocusPrice ? 'Ford Focus' : 'ВелосипедSTELS'}`);
/*
Равносильно записи
if (budget > bmwX3Price) {
    console.log('BMW X3');
} else if (budget > fordFocusPrice) {
    console.log('Ford Focus');
} else {
    console.log('ВелосипедSTELS);
}
*/