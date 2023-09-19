// запись цикла через for
for (let i = 1; i < 5; i++) {
    console.log(`Вывод for - ${i}`);
}

// запись цикла через while
let i = 1;
while (i < 5) {
    console.log(`Вывод while - ${i}`);
    i++;
}
console.log('---===---===---===---')
const arr = [1, 3, 4, 5, 6, 8, 9];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        break;
    }
    console.log(arr[i]);
}

// тот же цикл но через while
let j = 0;
while (arr[j] <= 5 && j < arr.length) {
    console.log(arr[j]);
    j++;
}

// конструкция do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 0);
// в этой конструкции проверка происходит после итерации цикла, а не до него как в случае for или while