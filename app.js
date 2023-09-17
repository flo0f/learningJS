const roles = ['user', 'admin', 'manager', 'superUser'];

// .slice() позволяет взять СРЕЗ массива, т.е. от N(начальный элемент) до M(конечный элемент) индекса
// .slice() не модифицирует исходный массив
// если указать 1 аргумент, то он возьмет элементы от этого индекса и до конца
const res = roles.slice(2);
console.log(roles);
console.log(res);
// если указать 2 аргумента, то будут взяты все элементы от N включительно, до M не включительно
const res2 = roles.slice(2, 3);
console.log(roles);
console.log(res2);
// можно брать элементы с конца указывая отрицательные индексы, например индекс -2 возьмет последние два элемента
const res3 = roles.slice(-2);
console.log(roles);
console.log(res3);

const res4 = roles.slice(1, -1);
console.log(roles);
console.log(res4);

console.log('---===---');
// .splice() схож с .slice(), НО он изменяет исходный массив
// также .splice() берёт элементы от N, M элементов
// он УДАЛЯЕТ часть массива, возвращая при этом удаленные элементы в виде массива
// если передать только один аргумент, то будут вырезаны элементы с этого индекса и до конца массива
console.log(roles);
const res5 = roles.splice(2);
console.log(res5);
console.log(roles);

roles.push('moderator', 'premium');
console.log(roles);
const res6 = roles.splice(2, 1); // беру с 2го индекса один элемент
console.log('===---===---===');
console.log(roles);
console.log(res6);
// .splice(-1) удаляет последний элемент массива

// .reverse() разворачивает массив, при этом модифицируя его
const res7 = roles.reverse();
console.log(res7);

// конкатенация массивов
const newRoles = ['sysadmin', 'developer'];
const res8 = roles.concat(newRoles);
// X.concat(Y) соединяет массив Х с массивом Y при этом в начале идут элементы массива X
console.log(res8);