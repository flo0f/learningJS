/*
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
	выведите в консоле "Успех", если нет - "Вы робот!",
	а если он введёт "Я не робот", то тоже "Успех".
*/
const answer = prompt('Сколько будет 7 + или - 15?');
/*
if (answer === '-8') {
    console.log('Успех');
} else if (answer === '22') {
    console.log('Успех');
} else if (answer === 'Я не робот') {
    console.log('Вы взломали систему!');
} else {
    console.log('Вы робот!');
}
*/
// Вариант с тернарным оператором
/*
console.log(answer === '22' ? 'Успех' : answer === '-8' ? 'Успех' : answer === 'Я не робот' ? 'Система взломана' : 'Вы робот!');
*/
// Вариант через switch case
switch (true) {
    case answer === '22':
    case answer === '-8':
    case answer === 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!');
}