// поиск элемента 
const roles = ['user', 'admin', 'manager', 'admin'];

// получение индекса элемента массива .indexOf
// indexOf возвращает индекс запрашиваемого элемента
const elIndex = roles.indexOf('admin');
console.log(elIndex);
// .indexOf() ищет первое вхождение элемента в массив
// т.к. в массиве roles два элемента 'admin', то при проверке слева направо будет выдан индекс 1

// если запрашиваемого значения не существует, то получим -1
const unknownIndex = roles.indexOf('moderator');
console.log(unknownIndex); // => -1

if (roles.indexOf('admin') >= 0) {
    console.log('Доступ есть!');
}

// если .indexOf() возвращает индекс первого вхождения элемента в массив
// то .includes() возвращает true или false в зависимости от наличия элемента в массиве
console.log(roles.includes('admin')); // => true
console.log(roles.includes('moderator')); // => false

// для проверки наличия элемента в массиве лучше использовать такую запись
if (roles.includes('admin')) {
    console.log('Доступ есть!!');
}