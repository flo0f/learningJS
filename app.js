'use strict';

// let, var, const, function, arguments
// Scope chain
// this

function summa(n1, n2) {
   console.log(arguments);
   console.log(this);
   return n1 + n2;
};

console.log(summa(1, 3, 6, 7, 3));

// arguments - спец. объект который выдает ВСЕ аргументы переданные в функцию
// В СТРЕЛОЧНОЙ ФУНКЦИИ arguments НЕ РАБОТАЕТ!