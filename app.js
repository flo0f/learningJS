'use strict';

const audi = {
   make: 'Audi',
   model: 'Q3',
   damages: []
};

const carManipulation = {
   addDamage(part, rate) {
      this.damages.push({ part, rate });
      console.log(`Добавили повреждение на ${this.make} ${this.model}`);
   }
};

// bind
const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('bumper', 69);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Roof');
addDamageAudiRoof(5);

console.log(audi.damages);