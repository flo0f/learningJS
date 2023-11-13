'use strict';

const user = {
   firstName: 'Vasya',
   lastName: 'Pupkin',
   age: 20,
   getUserInfo: function() {
      console.log(`${this.firstName} ${this.lastName}`)

      const heIs18 = () => {
         if (this.age > 18) {
            console.log('Can drink');     // heIs18 не относится ни к какому объекту, соответственно
         } else {                         // её this будет равен undefined
            console.log('Cant drink')
         }
      }
      heIs18();
   },
   getUserInfoArrow: () => {
      console.log(this); // мы получим this глобального scope, т.е. window
      console.log(`${this.firstName} ${this.lastName}`)
   }
};

user.getUserInfo();
user.getUserInfoArrow();