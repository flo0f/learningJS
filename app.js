// rest оператор = ...

const data = [1, 2, 3, 4 ,5 ,6];
const [one, two, ...others] = data;
console.log(one, two, others);
// rest оператор нельзя использовать нигде кроме последней переменной
// const [one, ...others, six] = data; => ошибка