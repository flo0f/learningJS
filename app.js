'use strict';

function changeBalance() {
   let balance = 0;
   return function(sum) {
      balance += sum;
      console.log(`Баланс: ${balance}`);
   }
};
const change = changeBalance(); // balance для этой функции равен нулю
change(10); // balance += 10 => balance = 10
change(10); // balance += 10 => balance = 20
change(10); // balance += 10 => balance = 30

const change2 = changeBalance(); // balance для этой функции равен нулю
change2(5); // balance += 5 => balance = 5
change2(5); // balance += 5 => balance = 10
change2(5); // balance += 5 => balance = 15

console.dir(change);
