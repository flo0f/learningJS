// function power(pow) {
//     return function (num) {
//         return num**pow;
//     }
// }

// стрелочная функция power
const power = (pow) => function(num) {return num**pow};

// реализация из урока
// const power = pow => num => num**pow;

// powerOfTwo является функцией, т.к. функция power вернула в неё анонимную функцию
const powerOfTwo = power(2);
console.log(powerOfTwo(2));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(5)(4));

