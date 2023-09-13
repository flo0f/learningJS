// оператор нулевого слияния или nullish coalesing
let username;
// '||' считает username неопределенным значением
console.log(username || 'Default Username');
// '??' считает любое значение определенным, кроме null и undefined
console.log(typeof username)
console.log(username ?? 'Default Username');
// оператор '??' возвращает первое значение если он не null/undefined, иначе второе значение

let firstName;
let lastName;
let nickName = 'supercoder';

// показывает первое значение, которое определено
console.log(firstName ?? lastName ?? nickName ?? 'неизвестный');

/*
Оператор || не различает false, 0, '' и null/undefined
для него они все одинаковы т.к. при преобразовании в Boolean() все возвращают false,
НО оператор ?? может отличить пустое значение от ложного

т.е. || возвращает первое ИСТИННОЕ значение
?? возвращает первое ОПРЕДЕЛЕННОЕ значение
*/