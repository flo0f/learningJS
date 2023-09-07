const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

/*
Более приоритетные операции выполняются в первую очередь
посмотреть приоритетность можно https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
100 -(12) 10 >(10) 90 -(12) 5
т.к. минус приоритетнее, то он выполнится в первую очередь
*/

// Оператор присваивания выполняется справа налево
let b;
let c;
c = b = 100 + 50; // сначала "+", потом приваивается 150 в b и потом b в с
console.log(c);
console.log(b);