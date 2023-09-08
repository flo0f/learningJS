/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
// Данные
const timePerDay = 5;
const daysPerWeek = 5;
const orderTime = 40;
const timeLeft = 11;
const salaryPerHour = 80;

// Расчеты
const orderCost = orderTime * salaryPerHour;
const workDays = timeLeft - 2;
const hoursCanWork = workDays * timePerDay;

// Вывод в консоль
console.log('Смогу ли я работать' + ' ' + (orderTime <= hoursCanWork));
console.log('Цена заказа' + ' ' + orderCost + 'usd');
