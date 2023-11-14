'use strict';
/*
   Создайте объект пользователя с паролем.
   С помощью функции ниже удалить пароль сделав
   функцию сброса пароля
*/

function removePassword(reset) {
   if (reset) {
      this.password = undefined;
   } else {
      this.password = '1';
   }
};

let user = {
   userName: 'Nagibator1337',
   password: 'helloWorld'
};

const removePasswordNagibator = removePassword.bind(user, true);
removePasswordNagibator();

console.log(user);

