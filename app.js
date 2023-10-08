const userArray = ['Вася', 'Пупкин', 24];
const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: [
        'Code',
        'cooking'
    ],
    educationBasic: 'School 45',
    educationProgressive: 'Harvard'
};

// member access notation
console.log(user);
console.log(user.name);
console.log(user.skills[0]);

console.log(user['name']);
const level = 'Basic';
console.log(user['education' + level]); // При таком обращении к свойству объекта можно проводить рассчеты

// задать свойство объекта
user['city'] = 'Moscow';
console.log(user.city);

// модификация существующего свойства
user.age = 30; // user['age'] = 30;
console.log(user);
console.log(user.age);