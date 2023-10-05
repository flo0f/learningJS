/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function validNumber (num) {
    let x = num.trim();
    while (x.includes('+')) {
        x = x.slice(x.indexOf('+') + 1);   
    } 
    while (x.includes('(')) {
        x = x.slice(0, x.indexOf('(')) + x.slice(x.indexOf('(') + 1);
    }
    while (x.includes(')')) {
        x = x.slice(0, x.indexOf(')')) + x.slice(x.indexOf(')') + 1);
    }
    while (x.includes(' ')) {
        x = x.slice(0, x.indexOf(' ')) + x.slice(x.indexOf(' ') + 1);
    }
    while (x.includes('-')) {
        x = x.slice(0, x.indexOf('-')) + x.slice(x.indexOf('-') + 1);
    }
    if (x.length != 11 || isNaN(Number(x)) || !(x.startsWith('8') || x.startsWith('7'))) {
        return `Номер ${num.trim()} не верный :(`
    } else {
        return `Номер ${num.trim()} верный! :)`;
    }
}
// true
console.log(validNumber(num1));
console.log(validNumber(num2));
console.log(validNumber(num3));
console.log(validNumber(num4));
console.log(validNumber(num5));
// false
console.log(validNumber(num1Error));
console.log(validNumber(num2Error));
console.log(validNumber(num3Error));
console.log(validNumber(num4Error));