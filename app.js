function powerOfTwo(num) {
	return num * num;
}
console.log(powerOfTwo(5));

const poft = function (num) {
	return num * num;
}
console.log(poft(6));

// функции можно использовать до их объявления
console.log(powerOfThree(4));
function powerOfThree(num) {
	return num ** 3;
}