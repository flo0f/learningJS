'use strict';

const audi = {
   make: 'Audi',
   model: 'A3',
   year: 2021,
   damages: [],
   addDamage(part, rate) {
      console.log(`У автомобиля ${this.make} ${this.model} ${this.year} добавлено: \n- повреждение: ${part} со степенью ${rate}`);
      this.damages.push({
         part,
         rate
      })
   }
};

audi.addDamage('Door', 4);

const bmw = {
   make: 'BMW',
   model: 'X5',
   year: 2023,
   damages: []
};

bmw.addDamage = audi.addDamage;
bmw.addDamage('Bumper', 4);

const addDamageFunction = audi.addDamage;

// метод call 
addDamageFunction.call(audi, 'Backdoor', 3);

// метод .apply
addDamageFunction.apply(bmw, ['glass', 5]);