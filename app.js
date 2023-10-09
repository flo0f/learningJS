const cities = {
    msk: {
        temp: 25
    },
    spb: {
        temp: 20
    }
};

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
    console.log(key);
    sumTemp += cities[key].temp;
};
console.log(sumTemp / citiesCount);

// альтернативный способ итерации по ключам объекта
for (const key of Object.keys(cities)) {
    console.log(key);
}
