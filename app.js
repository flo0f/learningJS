// управление элементами массива 

// изменение  элемента
const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

// добавление элемента

users[3] = 'Олег';  // такое лучше не использовать
console.log(users);
// метод .push() добавляет элемент из () в массив в конец и возвращает длину получившегося массива
const answer = users.push('Никита');
console.log(users);
console.log(answer);
// метод .unshift() добавляет элемент из () в массив в НАЧАЛО и возвращает длину получившегося массива
const ans = users.unshift('Вася');
console.log(users);
console.log(ans);

// удаление элемента

// .pop() удаляет последний элемент в массиве и возвращает его
const a = users.pop();
console.log(users);
console.log(a);
// .shift() удаляет первый элемент в массиве и возвращает его
const a2 = users.shift();
console.log(users);
console.log(a2);