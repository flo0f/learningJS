/*
function - ключевое слово инициализации функции
после function идет название функции
в скобках после названия - аргументы функции
return - возвращает значение из функции
*/
let myName = 'anton'
function logName(name, surname) {
	console.log(`Мое имя ${name} ${surname}`);
}
logName(myName, 'pupkin'); // вызов функции

function deposit(depositInUSD, month, rate) {
	return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = deposit(5000, 12, 0.20);
console.log(example1);