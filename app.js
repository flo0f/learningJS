/* переписать функцию в стрелочную */

function toPower(num, power) {
	const res = num ** power;
	return res;
}
console.log(toPower(2, 3));
/*
const arrowToPower = (num, power) => {
	const res = num ** power;
	return res;
}
console.log(arrowToPower(2, 3));
*/

const arrowToPower = (num, power) => num ** power;
console.log(arrowToPower(2, 3));