const arr = [1, 4, 7, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('---===---===---===---');

// for of - упрощение обхода массива
for (let element of arr) {
    console.log(element);
}

console.log('---===---===---===---');

// for in - перебор массива по индексу
for (let index in arr) {
    console.log(arr[index]);
}