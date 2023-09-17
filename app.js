const userData = ['Влад', 19, 'Зажопинск'];
// обычный способ 
// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

// деструктуризация
// в [] указываются имена переменных, которым будут присвоены соответствующие элементы из массива после "равно"
const [userName, age, city] = userData;
console.log(userName, age, city);
// если необходимы только первый и третий элемент массива, то на месте неиспользуемого элемента можно поставить _
const [userName2, _, city2] = userData;
console.log(userName2, city2);
