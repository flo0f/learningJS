function toPower(num, power) {
	const res = num ** power;
	return res;
}
console.log(toPower(2, 3));
// простейший способ задать значение по умолчанию
function toPow(num, power) {
	const powCheck = power ?? 2; // если power не передали в качестве параметра, то его значение undefined
	return num ** powCheck; // т.к. значение undefined, то оператор ?? записывает второе значение в переменную
}
console.log(toPow(2));
// правильный способ задания значений по умолчанию
function pow(num, power = 2) {
	return num ** power;
}
console.log(pow(2));