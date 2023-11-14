'use strict';
/* 
   Сделать функцию пользователя, которая берет за основу
   userInfo и за счет замыкания создает новый объект, с
   которым можно работать как user1().increase(100)
*/

const userInfo = {
   balance: 0,
   operations: 0,
   increse(sum) {
      this.balance += sum;
      this.operations++;
   }
};

// // МОЯ РЕАЛИЗАЦИЯ
// function makeNewUser () {
//    let user = {
//       ...userInfo
//    }
//    return function() {
//       return user;
//    }
// }

// const user1 = makeNewUser();

// user1().increse(100);
// user1().increse(100);
// user1().increse(100);
// console.log(user1().balance);

// const user2 = makeNewUser();

// user2().increse(40);
// user2().increse(32);
// user2().increse(45);
// console.log(user2().balance);

// // РЕАЛИЗАЦИЯ ИЗ ВИДЕО
function user() {
   const userObj = {
      balance: 0,
      operations: 0,
      increse(sum) {
         this.balance += sum;
         this.operations++;
      }
   };
   return function() {
      return userObj;
   }
};

const user1 = user();
user1().increse(100);
user1().increse(100); 
console.log(user1());

const user2 = user();
user2().increse(100);
console.log(user2());