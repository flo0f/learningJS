const prices = [[2, 4], [3, 4], [10, [20, 30]]];

// .flat() делает массив плоским, т.е. убирает вложенность
// .flat() принимает значение глубины, которое по умолчаиню === 1
const res = prices.flat(2);
console.log(res);

// .flatMap() последовательное применение .map и .flat
const res2 = prices.flatMap((el) => el.concat([1]));
console.log(res2);